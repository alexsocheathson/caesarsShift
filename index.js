//var getFrequency = require('./lib/getFrequency');
var _ = require('lodash');


function getFrequency(string) {
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

Object.prototype.getKeyByValue = function( value ) {
    for( var prop in this ) {
        if( this.hasOwnProperty( prop ) ) {
             if( this[ prop ] === value )
                 return prop;
        }
    }
}

function randomEncryption(input){
  var result = "";
  var shiftBy = Math.floor(Math.random() * 27);
  console.log(shiftBy);

  var i;
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
}

var enc = randomEncryption("He didn't say any more but we've always been unusually communicative in a reserved way, \
  and I understood that he meant a great deal more than that. In consequence I'm inclined to reserve all judgments, a \
  habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores. The \
  abnormal mind is quick to detect and attach itself to this quality when it appears in a normal person, and so it \
  came about that in college I was unjustly accused of being a politician, because I was privy to the secret griefs \
  of wild, unknown men. Most of the confidences were unsought--frequently I have feigned sleep, preoccupation, or a \
  hostile levity when I realized by some unmistakable sign that an intimate revelation was quivering on the horizon--for \
  the intimate revelations of young men or at least the terms in which they express them are usually plagiaristic and \
  marred by obvious suppressions. Reserving judgments is a matter of infinite hope. I am still a little afraid of missing \
  something if I forget that, as my father snobbishly suggested, and I snobbishly repeat, a sense of the fundamental decencies \
  is parcelled out unequally at birth.And, after boasting this way of my tolerance, I come to the admission that it has a limit. \
  Conduct may be founded on the hard rock or the wet marshes but after a certain point I don't care what it's founded on. \
  When I came back from the East last autumn I felt that I wanted the world to be in uniform and at a sort of moral \
  attention forever; I wanted no more riotous excursions with privileged glimpses into the human heart. Only Gatsby, \
  the man who gives his name to this book, was exempt from my reaction--Gatsby who represented everything for which \
  I have an unaffected scorn. If personality is an unbroken series of successful gestures, then there was something gorgeous \
  about him, some heightened sensitivity to the promises of life, as if he were related to one of those intricate machines that \
  register earthquakes ten thousand miles away. This responsiveness had nothing to do with that flabby impressionability which \
  is dignified under the name of the 'creative temperament'--it was an extraordinary gift for hope, a romantic readiness such as \
  I have never found in any other person and which it is not likely I shall ever find again. No--Gatsby turned out all right \
  at the end; it is what preyed on Gatsby, what foul dust floated in the wake of his dreams that temporarily closed out my \
  interest in the abortive sorrows and short-winded elations of men.");

function decryption(input){
  var str = input.toLowerCase();
  var result = "";
  var freak = getFrequency(str);
  var getMax = _.max(Object.values(freak), function (o) { return freak[o]; });
  getMax = freak.getKeyByValue(getMax);
  
  //console.log(freak);
  //console.log(freak.getKeyByValue(getMax));
  
  //var shiftBy = getMax.charCodeAt(0) - "e".charCodeAt(0)%26; 
  //console.log(shiftBy)

  var shiftBy = "e".charCodeAt(0) - getMax.charCodeAt(0); 
  if (shiftBy < 0){
    shiftBy = 26 + shiftBy;
  }
  console.log(shiftBy)

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
  
}

var dec = decryption(enc);

//console.log(enc.substring(0,45));
console.log(dec.substring(0,45));








