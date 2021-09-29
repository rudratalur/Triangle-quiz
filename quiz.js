const quizForm = document.querySelector(".quiz-form");
const outputEl = document.querySelector("#output");
const submitAnswerBtn = document.querySelector("#submit-answer-btn")

const correctAnswers = ["90°", "Right angled"]

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    outputEl.innerText = "Your score is : " + score;
}

submitAnswerBtn.addEventListener('click', calculateScore);