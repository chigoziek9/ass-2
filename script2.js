document.getElementById("myButton1").addEventListener("click", function evenChecker() {
    var number = prompt("Enter a number");
    if (number % 2 == 0) {
        alert(number + " " + "is an even number");
    } else {
        alert(number + " " + "is an odd number");
    }
});
