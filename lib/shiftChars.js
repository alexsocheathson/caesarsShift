module.exports = function shiftChars(input, shiftBy){
  var result = "";
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
}
