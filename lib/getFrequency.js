module.exports = function getFrequency(string) {
  var freq = {};
  for (var i=0; i<string.length;i++) {
      var character = string.charAt(i);
      if(character == ' '){
      }
      else if (freq[character]) {
         freq[character]++;
      } else {
         freq[character] = 1;
      }
  }
  return freq;
};
