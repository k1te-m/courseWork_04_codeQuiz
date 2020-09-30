// Select Elements
const welcomeContainer = document.querySelector("#welcome");
const quizContainer = document.querySelector("#quiz");
const startQuiz = document.querySelector("#begin");
const timerEl = document.querySelector("#timer");
const quest = document.querySelector("#question");
const choiceA = document.querySelector("#a");
const choiceB = document.querySelector("#b");
const choiceC = document.querySelector("#c");
const choiceD = document.querySelector("#d");

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
console.log(quizQuestions[0].question);
console.log(quizQuestions[0].answers.a);
console.log(quizQuestions[0].correctAnswer);
// Variables
let count = 90;
let score = 0;
let timer;

// Functions
const renderTimer = () => {
  count--;
  timerEl.textContent = `Timer: ${count}`;
}
const beginQuiz = () => {
  timer = setInterval(renderTimer, 1000);
}

const renderQuestion = () => {
  quest.innerHTML = "<p>"+ quizQuestions[0].question +"</p>";
  choiceA.innerHTML = "<button type='radio'>"+ quizQuestions[0].answers.a +"</button>";
  choiceB.innerHTML = "<button type='radio'>"+ quizQuestions[0].answers.b +"</button>";
  choiceC.innerHTML = "<button type='radio'>"+ quizQuestions[0].answers.c +"</button>";
  choiceD.innerHTML = "<button type='radio'>"+ quizQuestions[0].answers.d +"</button>";
}


// OnClick
startQuiz.onclick = function () {
  welcomeContainer.style.display = "none";
  renderQuestion();
  quizContainer.style.display = "block";
  renderTimer();
  timer = setInterval(renderTimer,1000);
  
};
