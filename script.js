// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


// Function to generate password with user input

function generatePassword() 
{
  //an empty array to store all the characterset options.
  var allInOne = [];              

  var finalText = "";

  let lengthOfPassword = prompt ("Choose the length of password between 10 and 64.");

  //validation criteria for the password
  while (lengthOfPassword < 10 || lengthOfPassword > 64 || isNaN(lengthOfPassword)) 
    {                                     
    alert("Password length should be a number between 10 and 64. Please try again!!");
    return null;
    }

    //confirm user choises of characterset to include in the password.
    let askUpperCase = confirm ("Do you want Upper case letters in your password?");
    let askLowerCase = confirm ("Do you want lower case letters in your password?");
    let askSplChar = confirm ("Do you want special characters in your password?");
    let askNum = confirm ("Do you want numbers in your password?");

    if (askUpperCase == false && askLowerCase == false && askSplChar == false && askNum == false)
    {
     alert("That's invalid ! you must include atleast one type of characterset.");
      return null;
    } else
    {
      if (askUpperCase == true) 
      {
            allInOne = allInOne.concat(upperCasedCharacters);
      }
      if (askLowerCase == true) {
            allInOne = allInOne.concat(lowerCasedCharacters);
      }
      if (askSplChar == true) {
            allInOne = allInOne.concat(specialCharacters);
      }
      if (askNum == true) {
            allInOne = allInOne.concat(numericCharacters);
      }
    }
    
  //for loop to generate the chosen length of random charecters.
  for (var i = 0; i < lengthOfPassword; i++){
        finalText += allInOne[Math.floor(Math.random() * allInOne.length)];
    }
    return finalText;
}
  
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() 
{
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

