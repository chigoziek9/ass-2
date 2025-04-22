document.getElementById("myButton7").addEventListener("click", function evenChecker() {
    var randomNum = Math.floor(Math.random() * 5) + 1;
    var guessNum = parseFloat(prompt("Guess The Number From 1 to 5"));
    if (guessNum == randomNum) {
        result = "You guessed right!";
    } else{
        result = "Wrong guess. The number was "+randomNum;
    }

    alert("Result: " + result)

});
