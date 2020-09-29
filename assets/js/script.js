const quizContainer = document.querySelector("#quiz");
const startQuiz = document.querySelector("#begin");
const timerEl = document.querySelector("#timer");
const quest = document.querySelector("#question");
const answr = document.querySelector("#answer");
const questions = [
    "placeholder",
    "placeholder2",
];
const answers = [
    "answer1",
    "answer2",
];

let count = 60;

const beginQuiz = () => { 
    var timerInterval = setInterval(function() {
        count--;
        timerEl.textContent = `Timer: ${count}`;
    }, 1000);
    quest.textContent = questions[0];
    answr.textContent = answers[0];

}


startQuiz.onclick = function() {beginQuiz()};
