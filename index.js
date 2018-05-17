var getFrequency = require('./lib/getFrequency');
var shiftChars = require('./lib/shiftChars');
var getKeyByValue = require('./lib/getKeyByValue')
var _ = require('lodash');

module.exports = {
  randomEncryption: function(input) {
    var shiftBy = Math.floor(Math.random() * 27);
    // console.log(shiftBy);
    var result = shiftChars(input,shiftBy);
    return result;
    },

    decryption: function(input) {
      var str = input.toLowerCase();
      var result = "";
      var freak = getFrequency(str);
      var getMax = _.max(Object.values(freak), function (o) { return freak[o]; });
      getMax = freak.getKeyByValue(getMax);
      var shiftBy = "e".charCodeAt(0) - getMax.charCodeAt(0);
      if (shiftBy < 0){
        shiftBy = 26 + shiftBy;
      }
      var result = shiftChars(input, shiftBy);
      return result;
    },
  }
