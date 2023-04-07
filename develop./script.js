// Assignment code here
var generateBtn = document.querySelector("#generate");

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","~","}"];
var lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function generatePassword() {
  var passwordLength = prompt("What is your desired word lentgh, within the range of 8-128 characters?");
  var passwordNumber = parseInt(passwordLength);

  if (isNaN(passwordNumber) || passwordNumber < 8 || passwordNumber > 128) {
    alert("You need between 8 and 128 characters");
    return null;
  }

  var numberConfirm = confirm("Would you like to include numbers in your password?");
  var specialCharactersConfirm = confirm("Would you like to include special characters in your password?");
  var lowercaseCharactersConfirm = confirm("Would you like to include lowercase letters in your password?");
  var uppercaseCharactersConfirm = confirm("Would you like to include uppercase letters in your password?");

  if (!numberConfirm && !lowercaseCharactersConfirm && !uppercaseCharactersConfirm && !specialCharactersConfirm) {
    alert("Your password is empty");
    return null;
  }

  var charbank = []

  if (numberConfirm) {
    charbank = charbank.concat(numbers);
  }

  if (lowercaseCharactersConfirm) {
    charbank = charbank.concat(lowercaseCharacters);
  }

  if (uppercaseCharactersConfirm) {
    charbank = charbank.concat(uppercaseCharacters);
  }

  if (specialCharactersConfirm) {
    charbank = charbank.concat(specialCharacters);
  }
  var password = randomize(charbank, passwordNumber);

  return password;
}

function randomize(charbank, passwordNumber) {
  var emtString = ""
  for (var i = 0; i < passwordNumber; i++) {
    var rndIndex = Math.floor(Math.random() * charbank.length);
    var rndChar = charbank[rndIndex];
    emtString += rndChar;
  }
  return emtString;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
