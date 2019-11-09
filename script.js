//set variables 
//generate button 
var genButton = document.querySelector("#genButton");
// copy button 
var copyButton = document.querySelector("#copyButton");

//arrays for password
var lowerValues = ["abcdefghijklmnopqrstuvwxyz"];
lowerValues[0].split("");
console.log(lowerValues[0].split(""));

var upperValues = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
lowerValues[0].split("");
console.log(upperValues[0].split(""));

var numValues = ["1234567890"];
numValues[0].split("");
console.log(numValues[0].split(""));

var symbolValues = ["!@#$%^&*()_-=+"];
numValues[0].split("");
console.log(symbolValues[0].split(""));


//variable for display
var displayEl = document.getElementById("#display");

//empty array to push to 
var allArray = [ ];

//when user clicks generate password 
genButton.addEventListener("click", function(event){

//determines if user wants lowercase
var lowercase = confirm("Do you want your password to use lowercase letters?");
    
    if(lowercase){
    allArray = allArray.concat(lowerValues[0].split(""));
        console.log(allArray);
    } else{
        console.log("they do not want lowercase");
    }

//determines is user wants uppercase
var uppercase = confirm("Do you want your password to use uppercase letters?");
   
    if (uppercase){
    allArray = allArray.concat(upperValues[0].split(""));
        console.log(allArray);
    } else{
        console.log("they do not want uppercase");
    }

// //determines if user wants symbols
var symbols = confirm("Do you want your password to use symbols?");

    if (symbols){
    allArray = allArray.concat(symbolValues[0].split(""));
        console.log(allArray);
    } else{
        console.log("they do not want symbols");
    }

// //determines if user wants numbers 
var numbers = confirm("Do you want your password to use numbers?");

    if (numbers){
        allArray = allArray.concat(numValues[0].split(""));
        console.log("they want to use numbers");
    } else{
        console.log("they do not want numbers");
    }

// //lets user decide what length
var passLength = prompt("How long do you want your password to be? Choose a number between 1 and 120!");
    
    if (passLength > 0 && passLength < 121){
        console.log("Amount: " + passLength);
    }
    else{
        alert("Must enter amount between 1 and 120");
        prompt("How long do you want your password to be? Choose a number between 1 and 120!");
    }
//if they type a number in, generate random password
var finalPass = [];

for (var i = 0; i <= passLength; i++){
    var passGen = allArray[Math.floor(Math.random() * allArray.length)];
    finalPass.push(passGen); 
    console.log("Lets see: " + passGen);
}
console.log(finalPass);
    // return finalPass;

document.getElementById("display").value = finalPass;

})


//need to generate pasword 
//need to log users answers and only use what was selected 

//add password to textbox.display area

    
//create for loop to choose password characters
    // for(var i = 0; i <= complexity; i++){
    //     password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    // }
    
//function to copy to clipboard
    // copyButton.addEventListener("click", function(event){
    //     document.getElementById("display").select();
    //     document.execCommand("Copy");
    // })
    //     alert("Password Copied to Clipboard!");