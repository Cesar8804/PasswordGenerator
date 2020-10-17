// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordEntry=document.getElementById("passwordEntry");
var passwordText=document.querySelector("#password")
var caseArray=[];
var lowerCaseChar=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var numericChar=["1","2","3","4","5","6","7","8","9","0"];
var specialChar=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
  
}
function generatePassword(){
  var passwordString=""
  var useLowerCase=confirm("Do you want to include lowercase characters?");
    var useUpperCase=confirm("Do you want to include uppercase characters?");
    var useNumeric=confirm("Do you want to include numeric characters?");
    var useSpecial=confirm("Do you want to include special characters?");
    while (useLowerCase == false && useUpperCase == false && useNumeric == false && useSpecial == false) {
      alert("Please select one type of character");
      useLowerCase=confirm("Do you want to include lowercase characters?");
      useUpperCase=confirm("Do you want to include uppercase characters?");
      useNumeric=confirm("Do you want to include numeric characters?");
      useSpecial=confirm("Do you want to include special characters?");
    }
    
  var passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
  while(passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" || passwordLength === NaN || passwordLength === null) {
      alert("Please choose a number that is more than 8 and less than 128 characters");
      passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
  } 

  if (useLowerCase==true){
    caseArray.push(lowerCaseChar);

}
if (useUpperCase==true){
    caseArray.push(upperCaseChar)

}
if (useNumeric==true){
    caseArray.push(numericChar)
    
}
if (useSpecial==true){
    caseArray.push(specialChar)
}
caseArray = caseArray.reduce(function(a, b){
  return a.concat(b);
}, []);
console.log(caseArray);
for(var i = 0; i < passwordLength; i++){
     var randomIndex = parseInt(Math.floor(Math.random() * caseArray.length));
     var randomElement = caseArray[randomIndex];
     passwordString += randomElement;
 }
 return passwordString;

//// a loop is run for the length of the password


  

}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
