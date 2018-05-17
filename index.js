

function randomEncryption(input){
  var result = "";
  var shiftBy = Math.floor(Math.random() * 27);
  console.log(shiftBy);

  var i;
  for (i = 0; i < input.length; i++){ //ASCII
    // console.log(input[i]);
    // console.log(input[i].charCodeAt(0));
    if (input[i].charCodeAt(0) == 32) {
      // console.log("A space was recognized");
      result += String.fromCharCode(32);
    }
    //Uppercase letters
    else if(input[i] == input[i].toUpperCase()) {
        result = result + String.fromCharCode((input[i].charCodeAt(0)+shiftBy-65)%26 +65);
    }
    //Lowercase letters
    else{
        result += String.fromCharCode((input[i].charCodeAt(0)+shiftBy-97)%26 +97);
    }
  }
    return result;
}

console.log(randomEncryption('Harry was the one who accidentally ate your chips'));
