//set variables 
//generate button 
var genButton = document.querySelector("#genButton");
// copy button 
var copyButton = document.querySelector("#copyButton");

//arrays for password
var lowerValues = ["abcdefghijklmnopqrstuvwxyz"].split;
var upperValues = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"].split;
var numValues = ["1234567890"].split;
var symbolValues = ["!@#$%^&*()_-=+"].split;
var allArray = ["lowerValues", "upperValues", "numValues", "symbolValues"];

//variable for display
var displayEl = document.getElementById("#display");

//when user clicks generate password 
genButton.addEventListener("click", function(event){

//determines if user wants lowercase
var lowercase = confirm("Do you want your password to use lowercase letters?");
    
    if(lowercase){
    var lowercase = lowerValues;
        console.log("they want lowercase");
    } else{
        console.log("they do not want lowercase");
    }

//determines is user wants uppercase
var uppercase = confirm("Do you want your password to use uppercase letters?");
   
    if (uppercase){
    var uppercase = upperValues;
        console.log("they want to use uppercase");
    } else{
        console.log("they do not want uppercase");
    }

//determines if user wants symbols
var symbols = confirm("Do you want your password to use symbols?");

    if (symbols){
    var symbols = symbolValues;
        console.log("they want to use symbols");
    } else{
        console.log("they do not want symbols");
    }

//determines if user wants numbers 
var numbers = confirm("Do you want your password to use numbers?");

    if (numbers){
    var numbers = "numValues";
        console.log("they want to use numbers");
    } else{
        console.log("they do not want numbers");
    }

//lets user decide what length
var passLength = prompt("How long do you want your password to be? Choose a number between 1 and 120!");
    
    if (passLength > 0 && passLength < 121){
        console.log("Amount: " + passLength);
        var passLength = "";
    }
    else{
        alert("Must enter amount between 1 and 120");
        prompt("How long do you want your password to be? Choose a number between 1 and 120!");
    }
//if they type a number in, generate random password
for (var i = 0; i <= passLength; i++){
    var passGen = allArray[Math.floor(Math.random() * allArray.length)];
}
console.log("Lets see: " + passGen);
})

// end of choices 

//need to generate pasword 
//need to log users answers and only use what was selected 

//add password to textbox.display area
// document.getElementById("display").value = password;
    
// }
//create for loop to choose password characters
    // for(var i = 0; i <= complexity; i++){
    //     password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    // }
    
//function to copy to clipboard
    copyButton.addEventListener("click", function(event){
        document.getElementById("display").select();
        document.execCommand("Copy");
    })
        alert("Password Copied to Clipboard!");