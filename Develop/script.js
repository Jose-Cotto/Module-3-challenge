// Assignment code here
var generateBtn = document.querySelector("#generate");
// create arrays to reference when user selects the desired character sets
var passMin = 8;
var passMax = 128;
var lowercaseLe = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLe = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersLe = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialLe = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "[", "]", ":", ";", ",", ".", "<", ">", "?", "/", "`", "~"];
// create empty array to add character sets into if the user selects that they want them
var result = [];

// Create function "generatePassword" that would generate a random password based on user choices
function generatePassword() {
  // created a series of prompts and confirms where the user selects what length and character sets to be included. If the user selects true for the desired character set, then the array containing the characters are added to the "result" array.
  var passLength = prompt('How long would you like your password? (8-128)');
  if (passLength >= passMin && passLength <= passMax) {
    alert('Your password will be ' + passLength + ' characters long')
  } else {
    alert('Error, Please use a valid number');
    return null;
  }

  var upperCase = confirm('Would you like your password to contain uppercase letters?');
  if (upperCase === true) {
    result = result.concat(uppercaseLe)
  }

  var lowerCase = confirm('Would you like your password to contain lowercase letters?');
  if (lowerCase === true) {
    result = result.concat(lowercaseLe)
  }

  var numbers = confirm('Would you like your password to contain numbers?');
  if (numbers === true) {
    result = result.concat(numbersLe)
  }

  var special = confirm('Would you like your password to contain special characters?');
  if (special === true) {
    result = result.concat(specialLe)
  }
  // If the user does not select any character set then they will receive an error message and will have to start the generation over. 
  if (upperCase === false && lowerCase === false && numbers === false && special === false) {
    alert('You must select one character type!')
    return null;
  }
  // create a for loop where for each single character as long as its less than the password length, a random character is selected from the entire "result" array
  var passEnd = '';
  for (var i = 0, n = result.length; i < passLength; i++) {
    // this assignment add the value of the right operand to the variable on the left
    passEnd += result[Math.floor(Math.random() * n)]

  }
  // Clears the result array after every button press and displays the users desired password.
  result = [];
  return passEnd

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button. When button is clicked, then run write password function.
generateBtn.addEventListener("click", writePassword,);



