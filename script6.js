document.getElementById("myButton6").addEventListener("click", function evenChecker() {
    var score = prompt("Enter a Score");
    if (score >= 70 && score <= 100) {
        result = "Excellent";
    } else if (score >= 50 && score <= 69) {
        result = "Good";
    }
    else if(score<50){
        result = "Needs Improvement"
    }

    alert("Result: " + result)
});