const question1 = document.getElementById("question1");
      const question2 = document.getElementById("question2");
      const question3 = document.getElementById("question3");
      const nextBtn1 = document.getElementById("nextBtn1");
      const nextBtn2 = document.getElementById("nextBtn2");
      const nextBtn3 = document.getElementById("nextBtn3");

      // correct answers
      const answers = {
        question1: "Judas",
        question2: "Mary",
        question3: "Israel",
      };

      // store players answers
      const userAnswers = {};

      // Next button 1: Move from Question 1 ➔ Question 2
      nextBtn1.addEventListener("click", () => {
        const selected = document.querySelector(
          'input[name="question1"]:checked'
        );
        userAnswers.question1 = selected.value;
        question1.classList.add("hidden");
        question2.classList.remove("hidden");
      });

      // Next button 2: Move from Question 2 ➔ Question 3
      nextBtn2.addEventListener("click", () => {
        const selected = document.querySelector(
          'input[name="question2"]:checked'
        );
        userAnswers.question2 = selected.value;
        question2.classList.add("hidden");
        question3.classList.remove("hidden");
      });

      // Next button 3: End of quiz or show a message
      nextBtn3.addEventListener("click", () => {
        const selected = document.querySelector(
          'input[name="question3"]:checked'
        );
        userAnswers.question3 = selected.value;
        question3.classList.add("hidden");
        let score = 0;
        let total = Object.keys(answers).length;

        for (let key in answers) {
          if (userAnswers[key] === answers[key]) {
            score++;
          }
        }
        const resultDiv = document.getElementById("result");
        resultDiv.textContent = `🎉 Quiz Completed! Your Score: ${score} out of ${total}`;
        resultDiv.classList.remove("hidden");
      });