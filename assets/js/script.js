// Assignment code here
var specialChar = "!#$%&()*+,-./:;<=>?@[]^_{|}~";
var letters = "abcdefghyjklmnopqrst";
var randomness = function(multiplier) {
  var randomNumber = Math.floor((Math.random() * multiplier))
  return randomNumber;
}


function generatePassword (){

  return randomness(letters.length);

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
