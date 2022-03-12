// Assignment code for global variables
var specialChar = ["!#$%&()*-./:;<=>?@[_{}"]
var upperChar = ["ABCDEFGHYJKLMNOPQRSTWXYZ"];
var lowerChar = ["abcdefghyjklmnopqrstuvwxyz"]
var numericalChar = ["1234567890"];

// Select the <ul> element from the HTML document with the ID of criteria-list
var criteriaList = document.querySelector("#criteria-list");

// Function expresson for creating a message with the user's selected criteria, the parameter is a custom message 
var listCriteria = function (message){
  var criteriaInfo = document.createElement("li")
  criteriaInfo.textContent = message;
  criteriaList.appendChild(criteriaInfo)
};

// Declare function to generate password
function generatePassword (){
  // reset the values of the password pool and the content of the text area for the password
  var allCharacters = "";  
  var valueGenerated = "";
  criteriaList.innerHTML = null;

  // ask user for prefered criteria using confirm prompts
  // use parseInt to convert the value of the promt to a numeric value
  var confirmLength = parseInt(prompt("How Many Characters would you like your password to have? \nPlease choose a number between 8 - 128"), 10);
  if (confirmLength >= 8 && confirmLength <= 128){
    console.log("you selected the " + typeof confirmLength +": "+ confirmLength + " Characters");

      var confirmSpecial = confirm("Would You like to include Special Characters?");
      if (confirmSpecial){
        listCriteria("You chose to Use Special Characters");
        allCharacters = allCharacters.concat(specialChar);
      }else {
        listCriteria("You chose NOT to Use Special Characters");
      };

      var confirmUpper = confirm("Would you like to use UpperCase Characters?");
      if(confirmUpper){
        listCriteria("You chose to Use Uppercase Characters");
        allCharacters = allCharacters.concat(upperChar);
      } else {
        listCriteria("You chose NOT to Use Uppercase Characters");
      };

      var confirmLower = confirm("Would you like to use LowerCase Characters?");
      if(confirmLower){
        listCriteria("You chose to Use Lowercase Characters");
        allCharacters = allCharacters.concat(lowerChar);
      } else {
        listCriteria("You chose NOT to Use Lowercase Characters");
      };

      var confirmNum = confirm("Would you like to use Numerical Characters?");
      if(confirmNum){
        listCriteria("You chose to Use Numerical Characters");
        allCharacters = allCharacters.concat(numericalChar);
      } else {
        listCriteria("You chose NOT to Use Numerical Characters");
      };

      if(!confirmLower && !confirmNum && !confirmSpecial && !confirmUpper){
        alert ("Please select at least ONE criteria")
        return false;
      };

    // for loop that creates a random selection of characters: "the password". following the criteria given by the user
    for (var i = 0; i < confirmLength; i++){
      var randomNum = Math.floor((Math.random() * allCharacters.length));
      valueGenerated = valueGenerated + allCharacters[randomNum]
      // we can confirm the values with console.log(valueGenerated);
      // we can confirm the values with console.log(allCharacters);
    };   
    // THE PASSWORD, a string created from random picks from the general pool of characters created by the preferences of the user.
    return valueGenerated;

  // stops the application if the user did not select a valid length option
  } else {
    alert("Please choose a valid number");
    return false;
  };
};

// assign the #generate buttoin to a variable
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //the generatePassword function returns the value generated in the for loop
  // select the textarea element from the document and insert the value of the generated password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
