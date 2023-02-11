// Assignment code here
var generateBtn = document.querySelector("#generate");
var passMin = 8;
var passMax = 128;
var lowercaseLe = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLe = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersLe = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialLe = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "[", "]", ":", ";", ",", ".", "<", ">", "?", "/", "`", "~"];
var result = [];


function generatePassword() {
  var passLength = prompt('How long would you like your password? (8-128)');
  if (passLength >= passMin && passLength <= passMax) {
    alert('Your password will be ' + passLength + ' characters long')
    var upperCase = confirm('Would you like your password to contain uppercase letters?');
  } else {
    alert('Error, Please use a valid number');
    return;
  }
  if (upperCase === true) {
     result = result.concat(uppercaseLe)
    var lowerCase = confirm('Would you like your password to contain lowercase letters?')
  } else {
    var lowerCase = confirm('Would you like your password to contain lowercase letters?')

  }

  if (lowerCase === true) {
     result = result.concat(lowercaseLe);
    var number = confirm('Would you like your password to contain numbers?')
  } else {
     var number = confirm('Would you like your password to contain numbers?')
  }

  if (number === true) {
     result = result.concat(numbersLe);
    var special = confirm('Would you like your password to contain special characters?')
  } else {
    var special = confirm('Would you like your password to contain special characters?')
  }
  if (special === true) {
     result = result.concat(specialLe);
    alert('Your password will be generated now!')
  } else {
    alert('Your password will be generated now!')
  }
  var passEnd ='';
  for (var i = 0, n= result.length; i < passLength; i++) {
    passEnd += result[Math.floor(Math.random()* n)]
  }
  return passEnd;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button. When button is clicked, then run write password function.
generateBtn.addEventListener("click", writePassword);



