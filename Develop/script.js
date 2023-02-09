// Assignment code here
  // var UPPERCASE = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  // var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Create function that can be called when button is clicked
function generatePassword(){ 
  // Started the function by adding a prompt that requires the desired length of the password and if statements that gauge the responses.
  var length = Number(prompt('How many characters will your password be? Enter a number between 8 and 128.'));

  if (length <= 128) {
    var uppercase = confirm('Do you want UPPERCASE letters in your password?');

  } else if (length > 128) {
    alert('I cant count that high!');
  }
  
  else {
    alert('Wrong Characters used silly');
  }


    // console.log ('Hey, You clicked the button!')
    // prompt('How long do want your password (8-128)?');
    // 1. prompt the user for the password criteria
      // a. length 8 - 128s
      // b. uppercase, lowercase, numbers , special characters.
    // 2. validate input
    // 3. password is displayed




    return 'Generated password will go here!';
  }

// Get references to the #generate element
// targeting the ID generate in the button element.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
