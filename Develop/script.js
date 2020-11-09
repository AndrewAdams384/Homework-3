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

var objLength = JSON.parse(characterAmount);
var length = characterAmount

function generatePassword (characterAmount) {
  var result = "";

  if (lowerCase)  {
    var characters = "acdefghijklmnopqrstuvwxyz"
    if (upperCase) {
      var characters = "acdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      if (numbers) {
        var characters = "acdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
        if (specialCharacters) {
          var characters = "acdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
        }
      }
    }
  }   

  else if (upperCase) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numbers) {
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
      if (specialCharacters) {
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
      }
    }
  }

  else if (numbers) {
    var characters = "1234567890"
    if (specialCharacters) {
      var characters = "1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    }
  }

  else if (specialCharacters) {
    var characters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }

  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result
}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
