/* global sponsorOverride */
var Readable = require('stream').Readable;

var request = require('superagent');
var has = require('has');


module.exports = function bountysource(batchSize, count) {
  var queue = [];
  var override = typeof sponsorOverride !== 'undefined' ? sponsorOverride : {};
  var stream = new Readable({ objectMode: true });
  var page = 1;

  batchSize = batchSize || 50;
  count = count || Number.MAX_VALUE;


  function onResponse(err, res) {
    if (err || res.status !== 200) {
      console.error("Failed to fetch data from bountysource:",
          res.status, err);
      queue.push(null);
      flush();
      return;
    }

    if (!res.body.length) {
      queue.push(null);
      flush();
      return;
    }

    page++;

    for (var i = 0; i < res.body.length; i++) {
      var rawSponsor = res.body[i];
      // Sponsors without id are anonymous 
      if (has(rawSponsor, 'id')) {
        var sponsor = {
          id: rawSponsor.slug,
          name: rawSponsor.display_name,
          amount: parseFloat(rawSponsor.amount),
          url: null,
          logoUrl: null,
          frontLogoUrl: null,
          imageUrl: rawSponsor.image_url_large
        };

        if (has(override, sponsor.id)) {
          sponsor.url = override[sponsor.id].url;
          if (override[sponsor.id].imageUrl)
            sponsor.imageUrl = override[sponsor.id].imageUrl;
          if (override[sponsor.id].frontImageUrl)
            sponsor.frontImageUrl = override[sponsor.id].frontImageUrl;
        }

        queue.push(sponsor);

        if (!--count) {
          queue.push(null);
          break;
        }
      }
    }

    flush();
  }

  function nextBatch() {
    request
      .get('https://api.bountysource.com/supporters')
      .query({per_page: batchSize})
      .query({page: page})
      .query({team_slug: 'neovim'})
      .set({Accept: 'application/vnd.bountysource+json; version=2'})
      .end(onResponse);
  }

  function flush() {
    stream.push(queue.shift());
  }

  stream._read = function() {
    if (!queue.length) {
      nextBatch();
      return;
    }

    flush();
  };

  return stream;
};
