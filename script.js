//set variables 
//generate button 
var genButton = document.querySelector("#genButton");
// copy button 
var copyButton = document.querySelector("#copyButton");

//arrays for password
var lowerValues = ["abcdefghijklmnopqrstuvwxyz"];
lowerValues[0].split("");
// console.log(lowerValues[0].split(""));

var upperValues = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
lowerValues[0].split("");
// console.log(upperValues[0].split(""));

var numValues = ["1234567890"];
numValues[0].split("");
// console.log(numValues[0].split(""));

var symbolValues = ["!@#$%^&*()_-=+"];
numValues[0].split("");
// console.log(symbolValues[0].split(""));


//variable for display
var displayEl = document.getElementById("#display");

//empty array to push to 
var allArray = [ ];

//when user clicks generate password 
var genFunction = genButton.addEventListener("click", function(event){

//determines if user wants lowercase
var lowercase = confirm("Do you want your password to use lowercase letters?");
    
    if(lowercase){
    allArray = allArray.concat(lowerValues[0].split(""));
        console.log(allArray);
    } else{
        console.log("they do not want lowercase");
    }

//determines if user wants uppercase
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

//determines if user wants numbers 
var numbers = confirm("Do you want your password to use numbers?");

    if (numbers){
        allArray = allArray.concat(numValues[0].split(""));
        console.log("they want to use numbers");
    } else{
        console.log("they do not want numbers");
    }

    if (lowercase === false && uppercase === false && symbols === false && numbers === false){
        alert("User must select a variable, please try again");
        genFunction.genButton();
    }


// //lets user decide what length
var passLength = prompt("How long do you want your password to be? Choose a number between 8 and 128!");
    
    if (passLength > 9 && passLength < 129){
        console.log("Amount: " + passLength);
    }
    else{
        alert("Must enter amount between 8 and 128");
        prompt("How long do you want your password to be? Choose a number between 8 and 128!");
    }

//if they type a number in, generate random password
var finalPass = [];

for (var i = 1; i <= passLength; i++){
    var passGen = allArray[Math.floor(Math.random() * allArray.length)];
    finalPass.push(passGen); 
    console.log("Lets see: " + passGen);
}
console.log(finalPass);

//add password to textbox.display area
document.getElementById("display").value = finalPass.join("");

})

//function to copy to clipboard

copyButton.addEventListener("click", function(event){
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password Copied to Clipboard!");
})