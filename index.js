 function getRndInteger(min, max) {
     return Math.floor(Math.random() * (max - min) ) + min;
  }
    function myFunction() {
      var x, userguess,cguess;
      x = document.getElementById("numberguess").value;
      if (isNaN(x) || x < 1 || x > 6) {
        userguess = "Input not correct";
      } else {
            cguess = getRndInteger(1, 6);
        if (cguess == x) {
            userguess = "Congradulations your guess is correct"
        } else {
            userguess = "Please Try Again the number the computer guessed is: " + cguess
        }
    }
    document.getElementById("demo").innerHTML = userguess;
  }
