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

//  This becomes the getPasswordOptions function now.
function getPasswordOptions() {
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
  console.log("length", length);
  console.log("special", hasSpecialCharacters);
  console.log("numbers", hasNumericCharacters);
  console.log("upper", hasUpperCasedCharacters);
  console.log("lower", hasLowerCasedCharacters);

  //  Need to include the length that the user entered
  // We also been to pass the response from the prompt (true or false); not the array itself
  var password = {
    length: length,
    specialArray: hasSpecialCharacters,
    upperArray: hasUpperCasedCharacters,
    lowerArray: hasLowerCasedCharacters,
    numberArray: hasNumericCharacters,
  };
  return password;
}

function getRandom(array) {
  var randIndex = Math.floor(Math.random() * array.length);
  var randElement = array[randIndex];

  return randElement;
}

//  This function is being called inside the writePassword function so it is not needed here.
// Now the prompts will not be triggered until the Generate Password button is clicked.
// var characters = generatePassword();

//  This becomes the generatePassword function now.
function generatePassword() {
  //  There are the options that are returned from the function call.
  var options = getPasswordOptions();
  console.log(options)
  var finalPassword = [];

  var possiblePassword = [];

  var guaranteedPassword = [];

  // Replaced generatePassword object with options
  // We also need to reference the correct properties off the object
  if (options.lowerArray) {
    possiblePassword = possiblePassword.concat(lowerArray);

    guaranteedPassword.push(getRandom(lowerArray));
  }

  if (options.upperArray) {
    possiblePassword = possiblePassword.concat(upperArray);

    guaranteedPassword.push(getRandom(upperArray));
  }

  if (options.numberArray) {
    possiblePassword = possiblePassword.concat(numberArray);
    guaranteedPassword.push(getRandom(numberArray));
  }

  if (options.specialArray) {
    possiblePassword = possiblePassword.concat(specialArray);
    guaranteedPassword.push(getRandom(specialArray));
  }

  //  here we are getting the random characters
  for (var i = 0; i < options.length; i++) {
    var character = getRandom(possiblePassword);

    finalPassword.push(character);
  }

  //  This is to ensure that one character of each asked for character set is added
  for (var i = 0; i < guaranteedPassword.length; i++) {
    finalPassword[i] = guaranteedPassword[i];
    console.log(finalPassword);
  }
  
  //  This needs to returned outside of the for loop
  return finalPassword.join("");
}


function writePassword() {
  console.log("buttonclick");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
