var through = require('through2');
var has = require('has');

var defaultImageUrl = 'https://cloudinary-a.akamaihd.net/bountysource/image/upload/d_noaoqqwxegvmulwus0un.png,c_pad,w_100,h_100/noaoqqwxegvmulwus0un.png';

var storage = typeof localStorage !== 'undefined' ? localStorage : null;

function image() {
  return through.obj(function(sponsor, enc, cb) {
    var url = sponsor.amount >= 75 ? sponsor.imageUrl : defaultImageUrl;

    if (storage) {
      sponsor.logo = storage.getItem('logo-'+url);
      if (sponsor.logo) {
        cb(null, sponsor);
        return;
      }
    }

    var image = new Image();
    image.crossOrigin = "anonymous";
    image.src = url;
    image.onload = function() {
      var size;

      if (sponsor.amount >= 250) {
        size = 128;
      } else if (sponsor.amount >= 150) {
        size = 96;
      } else if (sponsor.amount >= 75) {
        size = 64;
      } else {
        size = 32;
      }

      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      canvas.width = size;
      canvas.height = size;
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      sponsor.logo = canvas.toDataURL();

      if (storage) {
        storage.setItem('logo-'+url, sponsor.logo);
      }

      cb(null, sponsor);
    };
  });
}

function frontImage() {
  return through.obj(function(sponsor, enc, cb) {
    if (sponsor.amount < 250) {
      cb(null, null);
      return;
    }

    var url = sponsor.frontImageUrl ? sponsor.frontImageUrl : sponsor.imageUrl;

    if (storage) {
      sponsor.frontLogo = storage.getItem('frontLogo-'+url);
      if (sponsor.frontLogo) {
        cb(null, sponsor);
        return;
      }
    }

    var image = new Image();
    image.crossOrigin = "anonymous";
    image.src = url;
    image.onload = function() {

      var width = 300, height = 100;
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      // convert to grayscale to match the site theme
      var imageData = ctx.getImageData(0, 0, width, height);
      var pixels = imageData.data;
      var pixelSize = 4;

      for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
          var pixelIndex = (y * pixelSize * width) + (x * pixelSize);
          // get rgb components
          var red = pixels[pixelIndex];
          var green = pixels[pixelIndex + 1];
          var blue = pixels[pixelIndex + 2];
          // convert 
          var grayScale = red * 0.3 + green * 0.59 + blue * 0.11;
          // set the new pixel data
          pixels[pixelIndex] = grayScale;
          pixels[pixelIndex + 1] = grayScale;
          pixels[pixelIndex + 2] = grayScale;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      sponsor.frontLogo = canvas.toDataURL();

      if (storage) {
        storage.setItem('frontLogo-'+url, sponsor.frontLogo);
      }

      cb(null, sponsor);
    };
  });
}

exports.image = image;
exports.frontImage = frontImage;
