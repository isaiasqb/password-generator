// Assignment code here
var specialChar = ["!#$%&()*-./:;<=>?@[_{}"]
var upperChar = ["ABCDEFGHYJKLMNOPQRSTWXYZ"];
var lowerChar = ["abcdefghyjklmnopqrstuvwxyz"]
var numericalChar = ["1234567890"];
// var allCharacters = '';
var valueGenerated = "";

function generatePassword (){


  // use parseInt to convert the value of the promt to a numeric value
  var confirmLength = parseInt(prompt("How Many Characters would you like your password to have? \nPlease choose a number between 8 - 128"), 10);

  if (confirmLength >= 8 && confirmLength <= 128){
    console.log("you selected the " + typeof confirmLength +": "+ confirmLength + " Characters");
    var allCharacters = '';  
      console.log(allCharacters + "initial value");

      var confirmSpecial = confirm("Would You like to include Special Characters?");
      if (confirmSpecial){
        console.log("You chose to Use Special Characters");
        allCharacters = allCharacters.concat(specialChar);
      }else {
        console.log("You chose NOT to Use Special Characters");
      };

      var confirmUpper = confirm("Would you like to use UpperCase Characters?");
      if(confirmUpper){
        console.log("You chose to Use Uppercase Characters");
        allCharacters = allCharacters.concat(upperChar);
      } else {
        console.log("You chose NOT to Use Uppercase Characters");
      };

      var confirmLower = confirm("Would you like to use LowerCase Characters?");
      if(confirmLower){
        console.log("You chose to Use Lowercase Characters");
        allCharacters = allCharacters.concat(lowerChar);
      } else {
        console.log("You chose NOT to Use Lowercase Characters");
      };

      var confirmNum = confirm("Would you like to use Numerical Characters?");
      if(confirmNum){
        console.log("You chose to Use Numerical Characters");
        allCharacters = allCharacters.concat(numericalChar);
      } else {
        console.log("You chose NOT to Use Numerical Characters");
      };

      if(!confirmLower && !confirmNum && !confirmSpecial && !confirmUpper){
        alert ("Please select at least ONE criteria")
        return false;
      }

    
    for (var i = 0; i < confirmLength; i++){
      var randomNum = Math.floor((Math.random() * allCharacters.length));
      valueGenerated = valueGenerated + allCharacters[randomNum]
      console.log(valueGenerated);
      console.log(allCharacters);
    }   
    var allCharacters = '';
    return valueGenerated;

  
  } else {
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
 //**************reset the form to it's original value
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
