document.addEventListener("DOMContentLoaded", function() {
    let main = document.getElementById("text");
    main.innerHTML = "This is really cool!"
  });

  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
