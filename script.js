// Assignment Code

var generateBtn = document.querySelector("#generate");

//Character arrays
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*"];
var upperArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var randomCharacter = [];

//Added generatePassword to allow all prompts to pop up when we onclick generate password. Generate password is a part of the write password function.

function generatePassword() {
  var length = parseInt(
    prompt("How many characters would you like your password to contain?")
  );
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(length) === true) {
    alert("Password length must be provided as a number");
    //return;
  }
  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert("Password length must be at least 8 characters");
    //return;
  }
  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert("Password length must less than 129 characters");
    //return;
  }
  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters."
  );

  // Variable to store boolean regarding the inclusion of numeric characters
  var hasNumericCharacters = confirm(
    "Click OK to confirm including numeric characters."
  );
  // Variable to store boolean regarding the inclusion of lowercase characters
  var hasLowerCasedCharacters = confirm(
    "Click OK to confirm including lowercase characters."
  );
  // Variable to store boolean regarding the inclusion of uppercase characters
  var hasUpperCasedCharacters = confirm(
    "Click OK to confirm including uppercase characters."
  );
  console.log("passwordLength", length);
  console.log("special", hasSpecialCharacters);
  console.log("numbers", hasNumericCharacters);
  console.log("upper", hasUpperCasedCharacters);
  console.log("lower", hasLowerCasedCharacters);

  var password = {
    specialArray: specialArray,
    upperArray: upperArray,
    lowerArray: lowerArray,
    numberArray: numberArray,
  };
  return password;
}

function getRandom(array) {
  var randIndex = Math.floor(Math.random() * array.length);
  var randElement = array[randIndex];

  return randElement;
}

var characters = generatePassword();

var finalPassword = [];

var possiblePassword = [];

var guranteedPassword = [];

if (generatePassword.hasLowerCasedCharacters) {
  possiblePassword = possiblePassword.concat(lowerArray);

  guranteedPassword.push(getRandom(hasLowerCasedCharacters));
}

if (generatePassword.hasUpperCasedCharacters) {
  possiblePassword = possiblePassword.concat(upperArray);

  guranteedPassword.push(getRandom(hasUpperCasedCharacters));
}

if (generatePassword.hasNumericCharacters) {
  possiblePassword = possiblePassword.concat(numberArray);
  guranteedPassword.push(getRandom(hasNumericCharacters));
}

if (generatePassword.hasSpecialCharacters) {
  possiblePassword = possiblePassword.concat(specialArray);
  guranteedPassword.push(getRandom(hasSpecialCharacters));
}

for (var i = 0; i < generatePassword.length; i++) {
  var possiblePassword = getRandom(possiblePassword);

  finalPassword.push(possiblePassword);
}

for (var i = 0; i < guranteedPassword.length; i++) {
  finalPassword[i] = guranteedPassword[i];
  console.log(finalPassword);
  // return finalPassword.join(", ");
}

function writePassword() {
  console.log("buttonclick");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = "Your password is" + password;
}

generateBtn.addEventListener("click", writePassword);
// Write password to the #password input

