var getFrequency = require('./lib/getFrequency');
var _ = require('lodash');

Object.prototype.getKeyByValue = function(value) {
    for(var prop in this) {
        if(this.hasOwnProperty(prop)) {
             if(this[prop] === value)
                 return prop;
        }
    }
}

module.exports = {
  randomEncryption: function(input) {
    var result = "";
    var shiftBy = Math.floor(Math.random() * 27);
    // console.log(shiftBy);
    var i;
    for (i = 0; i < input.length; i++){ //ASCII
      //Handle uppercase letters
      if (input[i].charCodeAt(0) >= 65 && input[i].charCodeAt(0) <= 90)  {
        result = result + String.fromCharCode((input[i].charCodeAt(0)+shiftBy-65)%26 +65);
      }
      //Lower case letters
      else if (input[i].charCodeAt(0) >= 97 && input[i].charCodeAt(0) <= 122) {
        result += String.fromCharCode((input[i].charCodeAt(0)+shiftBy-97)%26 +97);
      }
      //All else
      else{
          result += input[i];
        }
      }
      return result;
    },

    decryption: function(input) {
      var str = input.toLowerCase();
      var result = "";
      var freak = getFrequency(str);
      var getMax = _.max(Object.values(freak), function (o) { return freak[o]; });
      getMax = freak.getKeyByValue(getMax);

      // console.log(freak);
      // console.log(freak.getKeyByValue(getMax));

      //var shiftBy = getMax.charCodeAt(0) - "e".charCodeAt(0)%26;
      // console.log(shiftBy)

      var shiftBy = "e".charCodeAt(0) - getMax.charCodeAt(0);
      if (shiftBy < 0){
        shiftBy = 26 + shiftBy;
      }
      // console.log(shiftBy)

      var result = "";
      for (i = 0; i < input.length; i++){ //ASCII
        //handle uppercase letters
        if (input[i].charCodeAt(0) >= 65 && input[i].charCodeAt(0) <= 90)  {
          result = result + String.fromCharCode((input[i].charCodeAt(0)+shiftBy-65)%26 +65);

        }
        //lower case letters
        else if (input[i].charCodeAt(0) >= 97 && input[i].charCodeAt(0) <= 122) {
          result += String.fromCharCode((input[i].charCodeAt(0)+shiftBy-97)%26 +97);
        }
        //all else
        else{
          result += input[i];
        }
      }
      return result;
    },
  }
