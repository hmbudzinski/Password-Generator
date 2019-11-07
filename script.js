//set variables 
//generate button 
var genButton = document.querySelector("#genButton");
// copy button 
var copyButton = document.querySelector("#copyButton");

//arrays for password
var lowerValues = "abcdefghijklmnopqrstuvwxyz".split;
var upperValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split;
var numValues = "1234567890".split;
var symbolValues = "!@#$%^&*()_-=+".split;

//when user clicks generate password, ask if would like to include lowercase values 
genButton.addEventListener("click", function(event){
var lowercase = confirm("Do you want your password to use lowercase letters?");
    
    if(event === true){
    console.log("they want lowercase");
    }
    else{
    console.log("they do not want lowercase");
    }

var uppercase = confirm("Do you want your password to use uppercase letters?");
   
    if (event === true){
    console.log("they want to use uppercase");
    }
    else{
        console.log("they do not want uppercase");
    }

var symbols = confirm("Do you want your password to use symbols?");

    if (event === true){
    console.log("they want to use symbols");
    }
    else{
        console.log("they do not want symbols");
    }

var numbers = confirm("Do you want your password to use numbers?");

    if (event === true){
    console.log("they want to use numbers");
    }
    else{
        console.log("they do not want numbers");
    }
})

//need to log users answers and only use what was selected 

//generate password 
// function generate(){
//     set password length/complexity
//     let complexity = document.getElementById("slider").value;


//     let password = "";

//     //create for loop to choose password characters
//     for(var i = 0; i <= complexity; i++){
//         password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
//     }

//     //add password to textbox.display area
//     document.getElementById("display").value = password;

// }

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