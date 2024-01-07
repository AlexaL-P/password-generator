// Array of special characters to be included in password
const specialCharacters = [
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
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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
const upperCasedCharacters = [
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

const finalPassword = ''
const optionPool = []
let preferences = []

// Function to prompt user for password options
function getPasswordOptions() {
  let prefLength = prompt("Password Options: Length (type a number from 8 to 128)")
  if (isNaN(Number(prefLength)) === true) {
    alert("Sorry, that's not a number. Please try again.");
    return;
  }
  else if (Number(prefLength) > 128){
    alert(prefLength + " is too big. Please try again.");
    return;
  }
  else if (Number(prefLength) < 8){
    alert(prefLength + " is too small. Please try again.");
    return;
  }
  else {
    preferences.push(Math.round(Number(prefLength)))
    console.log(preferences)
  }

  let prefSpecial = confirm("Password Options: Would you like Special Characters?")
  preferences.push(prefSpecial)
  
  let prefNumber = confirm("Password Options: Would you like Numbers?")
  preferences.push(prefNumber)
  
  let prefLower = confirm("Password Options: Would you like Lower Case Letters?")
  preferences.push(prefLower)
  
  let prefUpper = confirm("Password Options: Would you like Upper Case Letters?")
  preferences.push(prefUpper)
  
  if ((prefLower === false) && (prefUpper === false) && (prefNumber === false) && (prefSpecial === false)) {
    alert("You need to pick at least 1 option after your length. Please try again.");
    return;
  }
  console.log(preferences)
  
  return
}
 getPasswordOptions()

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);