// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
  //while loops to ensure the user inputs are valid
function getPasswordOptions() {
  var chooseLength = prompt("Enter how many characters the password should have (between 10 - 64)");
    while (chooseLength < 10 || chooseLength > 64) {
      chooseLength = prompt("It must be between 10 - 64 characters, please enter again");
    }
  var chooseLowercase = confirm("Should the password include lowercase characters?");
  var chooseUppercase = confirm("Should the password include uppercase characters?");
  var chooseNumeric = confirm("Should the password include numeric characters?");
  var chooseSpecial = confirm("Should the password include special characters?");
    while (!chooseLowercase && !chooseUppercase && !chooseNumeric && !chooseSpecial) {
      alert("The password must include at least one of these options, select again");
      var chooseLowercase = confirm("Should the password include lowercase characters?");
      var chooseUppercase = confirm("Should the password include uppercase characters?");
      var chooseNumeric = confirm("Should the password include numeric characters?");
      var chooseSpecial = confirm("Should the password include special characters?");
    }
  return [chooseLength,chooseLowercase,chooseUppercase,chooseNumeric,chooseSpecial];
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random () * arr.length)];
}

// Function to generate password with user input
//TODO find a way to condense these if statements??
function generatePassword() {
  var userChoices = getPasswordOptions();
  var passLength = +userChoices[0];
  var randomPassword = [];

  if (userChoices[1] && userChoices[2] && userChoices[3] && userChoices[4]) {
    while (randomPassword.length < passLength) {
      randomPassword.push(getRandom(lowerCasedCharacters));
      randomPassword.push(getRandom(upperCasedCharacters));
      randomPassword.push(getRandom(numericCharacters));
      randomPassword.push(getRandom(specialCharacters));
    }
  }
  else if (userChoices[1] && !userChoices[2] && !userChoices[3] && !userChoices[4]) {
    while (randomPassword.length < passLength) {
      randomPassword.push(getRandom(lowerCasedCharacters));
    }
  }
  else if (!userChoices[1] && userChoices[2] && !userChoices[3] && !userChoices[4]) {
    while (randomPassword.length < passLength) {
      randomPassword.push(getRandom(upperCasedCharacters));
    }
  }
  else if (!userChoices[1] && !userChoices[2] && userChoices[3] && !userChoices[4]) {
    while (randomPassword.length < passLength) {
      randomPassword.push(getRandom(numericCharacters));
    }
  }
  else if (!userChoices[1] && !userChoices[2] && !userChoices[3] && userChoices[4]) {
    while (randomPassword.length < passLength) {
      randomPassword.push(getRandom(specialCharacters));
    }
  }
  else if (userChoices[1] && userChoices[2] && !userChoices[3] && !userChoices[4]) {
    while (randomPassword.length < passLength) {
      randomPassword.push(getRandom(lowerCasedCharacters));
      randomPassword.push(getRandom(upperCasedCharacters));
    }
  }
  else if (userChoices[1] && !userChoices[2] && userChoices[3] && !userChoices[4]) {
    while (randomPassword.length < passLength) {
      randomPassword.push(getRandom(lowerCasedCharacters));
      randomPassword.push(getRandom(numericCharacters));
    }
  }
  else if (userChoices[1] && !userChoices[2] && !userChoices[3] && userChoices[4]) {
    while (randomPassword.length < passLength) {
      randomPassword.push(getRandom(lowerCasedCharacters));
      randomPassword.push(getRandom(specialCharacters));
    }
  }
  else if (!userChoices[1] && userChoices[2] && userChoices[3] && !userChoices[4]) {
    while (randomPassword.length < passLength) {
      randomPassword.push(getRandom(upperCasedCharacters));
      randomPassword.push(getRandom(numericCharacters));
    }
  }
  else if (!userChoices[1] && userChoices[2] && !userChoices[3] && userChoices[4]) {
    while (randomPassword.length < passLength) {
      randomPassword.push(getRandom(upperCasedCharacters));
      randomPassword.push(getRandom(specialCharacters));
    }
  }
  else if (!userChoices[1] && !userChoices[2] && userChoices[3] && userChoices[4]) {
    while (randomPassword.length < passLength) {
      randomPassword.push(getRandom(numericCharacters));
      randomPassword.push(getRandom(specialCharacters));
    }
  }
  else if (userChoices[1] && userChoices[2] && userChoices[3] && !userChoices[4]) {
    while (randomPassword.length < passLength) {
      randomPassword.push(getRandom(lowerCasedCharacters));
      randomPassword.push(getRandom(upperCasedCharacters));
      randomPassword.push(getRandom(numericCharacters));
    }
  }
  else if (userChoices[1] && userChoices[2] && !userChoices[3] && userChoices[4]) {
    while (randomPassword.length < passLength) {
      randomPassword.push(getRandom(lowerCasedCharacters));
      randomPassword.push(getRandom(upperCasedCharacters));
      randomPassword.push(getRandom(specialCharacters));
    }
  }
  else if (userChoices[1] && !userChoices[2] && userChoices[3] && userChoices[4]) {
    while (randomPassword.length < passLength) {
      randomPassword.push(getRandom(lowerCasedCharacters));
      randomPassword.push(getRandom(numericCharacters));
      randomPassword.push(getRandom(specialCharacters));
    }
  }
  else if (!userChoices[1] && userChoices[2] && userChoices[3] && userChoices[4]) {
    while (randomPassword.length < passLength) {
      randomPassword.push(getRandom(upperCasedCharacters));
      randomPassword.push(getRandom(numericCharacters));
      randomPassword.push(getRandom(specialCharacters));
    }
  }

  console.log(userChoices);
  console.log(randomPassword);
  return randomPassword.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);