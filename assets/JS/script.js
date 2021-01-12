var generateBtn = document.querySelector("#generate");
var specialCharacters = ["&", "!", "@", "#", "(", ")", "*", "^", "%", "$", "~", "`", "?", ">", "<"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var usersPassword = [];

function randompassword() {

  var usersAnswerSC = confirm("Do you want special characters?");
  var usersAnswerN = confirm("Do you want numbers?");
  var usersAnswerLC = confirm("Do you want lower case letters?");
  var usersAnswerUC = confirm("Do you want upper case letters?");

  if (usersAnswerSC === true) {
    usersPassword.push(...specialCharacters);
  }

  if (usersAnswerN === true) {
    usersPassword.push(...numbers);
  }

  if (usersAnswerUC === true) {
    usersPassword.push(...upperAlpha);
  }

  if (usersAnswerLC === true) {
    usersPassword.push(...lowerAlpha);
  }
  
  var passwordMax = [...usersPassword, ...usersPassword]
  // passwordMax = Math.floor(Math.random());
  // console.log(passwordMax)
}

function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var usersNumber = parseInt(prompt("Between 8 and 128, how many characters would you like?"));

  passwordText.value = usersPassword;

  if (usersNumber < 8 || usersNumber > 128) {
    alert("This is an invalid password length!");
    writePassword()
  } else {
    randompassword();
    console.log("here")
  }

  //   for (var i = 0; i < usersNumber; i++) {
  // }
}
generateBtn.addEventListener("click", writePassword);


// randomize array
// slice to usersNumber
// turn into a string
// display 