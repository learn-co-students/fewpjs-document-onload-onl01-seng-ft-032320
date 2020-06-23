// Your code goes here
// console.log("I did not wait till the DOM was loaded") This will always go first
//document.addEventListener("DOMContentLoaded", function() {console.log("The DOM has Loaded")});

document.addEventListener("DOMContentLoaded", function() {document.getElementById("text").textContent = "This is really cool!" })