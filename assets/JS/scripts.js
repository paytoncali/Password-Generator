var generateBtn = document.querySelector("#generate");
var specialCharacters = ["&", "!", "@", "#", "(", ")", "*", "^", "%", "$", "~", "`", "?", ">", "<"]; 
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var usersPassword = [];


// function randompassword() {

//   var usersAnswerSC = confirm("Do you want special characters?");
//   var usersAnswerN = confirm("Do you want numbers?");
//   var usersAnswerLC = confirm("Do you want lower case letters?");
//   var usersAnswerUC = confirm("Do you want upper case letters?");
//   // var passwordObject = { 
//   //   usersAnswerSC: usersAnswerSC, 
//   //   usersAnswerN: usersAnswerN,
//   //   usersAnswerUC: usersAnswerUC,
//   //   usersAnswerLC: usersAnswerLC
//   // }

//   if (usersAnswerSC === true) {
//     usersPassword.push(...specialCharacters);
//   }

//   if (usersAnswerN === true) {
//     usersPassword.push(...numbers);
//   }

//   if (usersAnswerUC === true) {
//     usersPassword.push(...upperAlpha);
//   }

//   if (usersAnswerLC === true) {
//     usersPassword.push(...lowerAlpha);
//   }

//   var passwordMax = [...usersPassword, ...usersPassword]
//   // var passwordMax = usersPassword.length;

//   // passwordMax = Math.floor(Math.random());
//   // console.log(passwordMax)
// }

function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var usersNumber = prompt("Between 8 and 128, how many characters would you like?");
  // parseInt(
  var usersAnswerSC = confirm("Do you want special characters?");
  var usersAnswerN = confirm("Do you want numbers?");
  var usersAnswerLC = confirm("Do you want lower case letters?");
  var usersAnswerUC = confirm("Do you want upper case letters?");
  passwordText.value = usersPassword;

  if (usersNumber < 8 || usersNumber > 128) {
    alert("This is an invalid password length!");
    writePassword()
  } else if (usersAnswerSC === true) {
        usersPassword.push(...specialCharacters);
      }
    
      else if (usersAnswerN === true) {
        usersPassword.push(...numbers);
      }
    
      else if (usersAnswerUC === true) {
        usersPassword.push(...upperAlpha);
      }
    
      else if (usersAnswerLC === true) {
        usersPassword.push(...lowerAlpha);
      }
    
      var passwordMax = [...usersPassword, ...usersPassword]

    for (i = 0; i < usersNumber; i++) {
        passwordMax = Math.floor(Math.random());
        var generatedPass = passwordMax.split();
        var finalPass = generatedPass.toString();
        console.log(finalPass);
      }
}

// function getPassword() {
//   for (i = 0; i < usersNumber; i++) {
//     passwordMax = Math.floor(Math.random());
//     var generatedPass = passwordMax.split();
//     var finalPass = generatedPass.toString();
//     console.log(finalPass);
  
//   }
// }

// return passwordObject;

// function getRandomPassword(a) {
//   var randomI = Math.floor(Math.random() * a.length);
//   var randomE = a[randomI];
//   return randomE;
// }



// for (i = 0; i < usersNumber; i++) {
//   passwordMax = Math.floor(Math.random());
//   console.log(passwordMax)
// }

// for (passwordMax = 0; passwordMax < usersNumber; passwordMax++) {
//   usersPassword = Math.floor(Math.random());
//   console.log(usersPassword)
// }

generateBtn.addEventListener("click", writePassword);

