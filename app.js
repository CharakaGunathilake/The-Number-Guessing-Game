
let randomNumber = Math.floor(Math.random() * 10 + 1);
let guesses = 1;
let rguesses = 3;
document.getElementById("submitguess").onclick = function () {
    let guessedNumber = document.getElementById("guessField").value;
    if (guesses != 3) {
        if (guessedNumber == randomNumber) {
            alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "+ guesses + " GUESS ");
        }else if (guessedNumber == "") {
            alert("ENTER A NUMBER!!!");
        }else if (guessedNumber > randomNumber) {
            guesses++;
            alert("OOPS SORRY!! TRY A SMALLER NUMBER"+ (rguesses--) + " GUESSES REMAINING ");
        }else {
            guesses++;
            alert("OOPS SORRY!! TRY A GREATER NUMBER"+ (rguesses--) + " GUESSES REMAINING ")
        }
    }else{
        alert("GAME OVER CORRECT NUMBER WAS " + randomNumber + "!! REFRESH AND TRY AGAIN!!");
    }
}
document.getElementById("Refresh").onclick = function (){
    location.reload();
}