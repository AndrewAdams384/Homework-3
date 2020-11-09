// Assignment Code
var generateBtn = document.querySelector("#generate");

// password conditions
// number of characters in the password 
var characterAmount = prompt("How many characters should your password have? Choose a number between 8 and 128.");
// lowercase
var lowerCase = confirm("Click OK to include lowercase letters in your password. Click Cancel to exclude lowercase letters from your password.");
// uppercase
var upperCase = confirm("Click OK to include UPPERCASE letters in your password. Click Cancel to exclude UPPERCASE letters from your password.");
// numbers
var numbers = confirm("Click OK to include numbers in your password. Click Cancel to exclude numbers from your password.");
// special characters
var specialCharacters = confirm("Click OK to include special characters in your password. Click Cancel to exclude special characters from your password.");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var length = characterAmount
  passwordText.value = password;
}

generatePassword () {}




}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
