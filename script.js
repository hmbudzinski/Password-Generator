//set variables 
//generate button 
var genButton = document.querySelector("#genButton");
// copy button 
var copyButton = document.querySelector("#copyButton");

//arrays for password
// var passwordParts = ["lowerValues", "upperValues", "numValues", "symbolValues"];
// var PasswordValues = ["abcdefghijklmnopqrstuvwxyz".split, "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split, "1234567890".split, "!@#$%^&*()_-=+".split];
var lowerValues = ["abcdefghijklmnopqrstuvwxyz".split];
var upperValues = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split];
var numValues = ["1234567890".split];
var symbolValues = ["!@#$%^&*()_-=+".split];

//when user clicks generate password, ask if would like to include lowercase values 
genButton.addEventListener("click", function(event){
var lowercase = confirm("Do you want your password to use lowercase letters?");
    
    if(lowercase === true){
    console.log("they want lowercase");
    var lowercase = "lowerValues";
    }
    else{
    console.log("they do not want lowercase");
    }

var uppercase = confirm("Do you want your password to use uppercase letters?");
   
    if (uppercase === true){
    console.log("they want to use uppercase");
    var uppercase = "upperValues";
    }
    else{
        console.log("they do not want uppercase");
    }

var symbols = confirm("Do you want your password to use symbols?");

    if (symbols === true){
    console.log("they want to use symbols");
    var symbols = "symbolValues";
    }
    else{
        console.log("they do not want symbols");
    }

var numbers = confirm("Do you want your password to use numbers?");

    if (numbers === true){
    console.log("they want to use numbers");
    var numbers = "numValues";
    }
    else{
        console.log("they do not want numbers");
    }

//set password length and complexity 
var passLength = prompt("How long do you want your password to be? Choose a number between 1 and 120!");
    if (passLength){
        console.log("Amount: " + passLength);
    }

var complexity = document.getElementById("passLength").value;

})

//generate pasword 
//need to log users answers and only use what was selected 
function generate(){
    passwordComboValues = ["numValues", "symbolValues", "upperValues", "lowerValues"];
    
    for (var i = 0; i < 0; i++){
        var finalPassCombo =  passwordComboValues[Math.floor(Math.random() * passwordComboValues.length)];
        console.log("password");
    }

    finalPassCombo = "";
}

    var password = "";

//create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    
 //add password to textbox.display area
    document.getElementById("display").value = password;

}

// //set default length display of 60
// document.getElementById("length"). innerHTML = "length: 60";

// //function to set length based on slider position
// document.getElementById("slider").oninput = function(){
//     if(document.getElementById("slider").value > 0){
//         document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
//     }
//     else{
//         documents.getElementById("length").innerHTML = "Length: 1";
//     }
// }

// //function to copy to clipboard

// copyButton.addEventListener("click", function(event){

// function.copyPassword(){
//     document.getElementById("display").select();
//     document.execCommand("Copy");
//     }
//     alert("Password Copied to Clipboard!");

// })