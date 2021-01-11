// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["&", "!", "@", "#", "(", ")", "*", "^", "%", "$", "~", "`", "?", ">", "<"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var lowerAlpha = upperAlpha.tolowercase();


// Write password to the #password input

var usersPassword = "";


function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = usersPassword;

  var usersNumber = parseInt(prompt("Between 8 and 128, how many characters would you like?"));
  console.log(usersNumber)

  if (usersNumber < 8 || usersNumber > 128) {
    alert("This is an invalid password length!");
    writePassword()
  }

  var usersAnswerSC = confirm("Do you want special characters?");
  var usersAnswerN = confirm("Do you want numbers?");
  // var usersAnswerLC = confirm("Do you want lower case letters?");
  var usersAnswerUC = confirm("Do you want upper case letters?");


  function randompassword() {
    if (usersAnswerSC === true) {
      var SCgenerated = Math.floor(Math.random() * 14);
      var randomSC = specialCharacters[SCgenerated];
      usersPassword += randomSC;
    }
  }

  function randompassword2() {
    if (usersAnswerN === true) {
      var Ngenerated = Math.floor(Math.random() * 9);
      var randomN = numbers[Ngenerated];
      usersPassword += randomN;
      // console.log(randomN)
    }
  }

  function randompassword3() {
    if (usersAnswerUC === true) {
      var UCgenerated = Math.floor(Math.random() * 25);
      var randomUC = upperAlpha[UCgenerated];
      usersPassword += randomUC;
      // console.log(randomUC)
    }
  }
  for (var i = 0; i < usersNumber; i++) {
    randompassword()
    randompassword2()
    randompassword3()
   

    

    // if (usersAnswerLC === true) {
    //   var LCgenerated = Math.floor(Math.random() * 25);
    //   var randomLC = upperAlpha[LCgenerated]
    //   // randomLC = randomLC.tolowercase();
    //   console.log(randomLC)
    // }
  }
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




