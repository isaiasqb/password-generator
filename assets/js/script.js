// Assignment code here
var specialChar = "!#$%&()*+,-./:;<=>?@[]^_{|}~";
var letters = "abcdefghyjklmnopqrst";
var randomness = function(multiplier) {
  var randomNumber = Math.floor((Math.random() * multiplier))
  return randomNumber;
}


function generatePassword (){
  // use parseInt to convert the value of the promt to a numeric value
  var promptLength = parseInt(prompt("How Many Characters would you like your password to have? \nPlease choose a number between 8 - 128"), 10);
  // confirming that the value has been turned into a prompt
  // console.log(typeof promptLength)
  if (promptLength >= 8 && promptLength <= 128){
    
      var confirmSpecial = confirm("Would You like to include Special Characters?");
      if (confirmSpecial){
        console.log("You chose to Use Special Characters");
      }else {
        console.log("You chose NOT to Use Special Characters");
      };

      var confirmUpper = confirm("Would you like to use UpperCase Characters?")
      if(confirmUpper){
        console.log("You chose to Use Uppercase Characters");
      } else {
        console.log("You chose NOT to Use Uppercase Characters");
      };

      var confirmLower = confirm("Would you like to use LowerCase Characters?")
      if(confirmLower){
        console.log("You chose to Use Lowercase Characters");
      } else {
        console.log("You chose NOT to Use Lowercase Characters");
      };

      var confirmNum = confirm("Would you like to use Numerical Characters?")
      if(confirmNum){
        console.log("You chose to Use Numerical Characters");
      } else {
        console.log("You chose NOT to Use Numerical Characters");
      };

      if(!confirmLower && !confirmNum && !confirmSpecial && !confirmUpper){
        alert ("Please select at least ONE criteria")
        return false;
      }
    return "you selected the length of: " + promptLength + " Characters";


  } 
  else {
    console.log(typeof promptLength)
    alert("Please choose a valid number");
    return false;
  };




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
