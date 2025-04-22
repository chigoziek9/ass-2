document.getElementById("myButton5").addEventListener("click", function voteEligibility() {
    var input = prompt("Enter a number:");
    var number = parseInt(input);

    for (var i = 1; i <= 12; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
});

