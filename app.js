let b = Math.floor(Math.random() * 10 + 1);
 
        let guess = 1;
 
        document.getElementById("submitguess").onclick = function () {
            let a = document.getElementById("guessField").value;
            if (a == b) {
                alert(" CONGRATULATIONS!!! YOU GUESSED IT IN " + guess + " GUESS ");
            }
            else if (a > b) {
                guess++;
                alert("OOPS SORRY!! TRY A SMALLER NUMBER");
            }
            else {
                guess++;
                alert("OOPS SORRY!! TRY A GREATER NUMBER")
            }
        }