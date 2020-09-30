// Location Variables
const quizContainer = document.querySelector("#quiz");
const startQuiz = document.querySelector("#begin");
const timerEl = document.querySelector("#timer");
const quest = document.querySelector("#question");
const answ = document.querySelector("#answer");

// Questions, Answers, and Global Variables
const quizQuestions = [
    {
        question: "Who holds the MLB record for the most career homeruns?",
        answers: {
            a: "Mark McGwire",
            b: "Willie Mays",
            c: "Barry Bonds",
            d: "Babe Ruth",
        },
        correctAnswer: "d"
    },
    {
        question: "Who holds the MLB record for the most career hits?",
        answers: {
            a: "Tris Speaker",
            b: "Hank Aaron",
            c: "Pete Rose",
            d: "Derek Jeter",
        },
        correctAnswer: "c"
    },
    {
        question: "What team has the most World Series Championships in MLB history?",
        answers: {
          a: "Cardinals",
          b: "Pirates",
          c: "Red Sox",
          d: "Yankees",
        },
        correctAnswer: "d"
    },
    {
        question: "How many games does each team play throughout one MLB season?",
        answers: {
          a: "162",
          b: "82",
          c: "60",
          d: "155",
        },
        correctAnswer: "a"
    },
    {
        question: "Who holds the MLB record for the most career strikeouts?",
        answers: {
          a: "Randy Johnson",
          b: "Tom Seaver",
          c: "Bob Gibson",
          d: "Nolan Ryan",
        },
        correctAnswer: "d"
    },
]
// console.log(quizQuestions);
let count = 100;

// Functions
const beginQuiz = () => {
  var timerInterval = setInterval(function () {
    count--;
    timerEl.textContent = `Timer: ${count}`;
  }, 1000);
  quest.textContent = questions[0];
  answ.textContent = answers[0];
};

// OnClick
startQuiz.onclick = function () {
  beginQuiz();
};
