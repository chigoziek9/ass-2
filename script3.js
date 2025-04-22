document.getElementById("myButton3").addEventListener("click", function voteEligibility() {
    var number1 = parseFloat(prompt("Enter your age"));
    var result;

    if (number1 >= 18) {
        result = "you are eligible to vote";
    } else if (number <= 18) {
        result = "you are not eligibile to vote yet";
    }

    alert("Result: " + result)
});
