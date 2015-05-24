/* global $, sponsorsDivId, sponsorsFront */
var bountysource = require('./bountysource');
var logo = require('./logo');
var sponsor_template = require('./sponsor.ejs');
var sponsor_front_template = require('./sponsor_front.ejs');


function renderSponsors(elementId) {
  bountysource(50)
  .pipe(logo.image())
  .on('readable', function() {
    $('#' + elementId).append($(sponsor_template(this.read())));
  });
}

function renderFrontpageSponsors(elementId) {
  bountysource(5, 5)
  .pipe(logo.frontImage())
  .on('readable', function() {
    $('#' + elementId).append($(sponsor_front_template(this.read())));
  });
}


$(function() {
  if (typeof sponsorsDivId !== 'undefined') {
    if (sponsorsFront) {
      renderFrontpageSponsors(sponsorsDivId);
    } else {
      renderSponsors(sponsorsDivId);
    }
  }
});
