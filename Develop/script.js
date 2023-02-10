// Assignment code here
var generateBtn = document.querySelector("#generate");
var passMin = 8;
var passMax = 128;
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "[", "]", ":", ";", ",", ".", "<", ">", "?", "/", "`", "~"];
var result;


function generatePassword() {
  var passLength = prompt('How long would you like your password? (8-128)');
  if (passLength >= passMin && passLength <= passMax) {
    alert('Your password will be ' + passLength + ' characters long')
    var upperCase = confirm('Would you like your password to contain lowercase letters?');
  } else {
    alert('Error, Please use a valid number');

  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button. When button is clicked, then run write password function.
generateBtn.addEventListener("click", writePassword);







// when button is pressed , then I am presented with prompts for password criteria.
  // 1. length of password 8 - 128.
  // 2. user chooses wether or not to include lowercase, uppercase, numeric and/or special values.
  // when answering each prompt , the input type should be validated and at least one character type should be selected.
  // when all prompts are answered, password is generated that meets the chosen criteria
  // password is displayed in an alert or in the text field.


