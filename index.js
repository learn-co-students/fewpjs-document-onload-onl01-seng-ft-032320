// Your code goes here
let text = document.getElementById('text');
text.innerText = "JavaScript is so cool. It lets me add text to my page programmatically."

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    text.innerHTML = 'This is really cool!'
});



