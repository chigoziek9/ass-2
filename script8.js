document.getElementById("myButton8").addEventListener("click", function evenChecker() {
    for (var i = 1; i <= 15; i++) {
        if(i % 5 === 0 && i % 3===0){
            console.log("Fizzbuzz") 
        }
        else if(i%3===0){
            console.log("fizz")
        }
        else if(i%5===0){
           console.log("buzz") 
        }
        else{
            console.log(i)
        }
    }
    
})
