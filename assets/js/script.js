// To Implement
// Logging/Storing usernames and scores

// Select Elements
const welcomeContainer = document.querySelector("#welcome");
const quizContainer = document.querySelector("#quiz");
const startQuiz = document.querySelector("#begin");
const timerEl = document.querySelector("#timer");
const quest = document.querySelector("#question");
const buttonA = document.querySelector("#a");
const buttonB = document.querySelector("#b");
const buttonC = document.querySelector("#c");
const buttonD = document.querySelector("#d");
const scoreDisp = document.querySelector("#score");
const buttonSec = document.querySelector("#buttons");

// Questions, Answers, and Global Variables
const quizQuestions = [
  {
    question: "Who holds the MLB record for the most career home runs?",
    answers: {
      a: "Mark McGwire",
      b: "Willie Mays",
      c: "Barry Bonds",
      d: "Babe Ruth",
    },
    correctAnswer: "c",
  },
  {
    question: "Who holds the MLB record for the most career hits?",
    answers: {
      a: "Tris Speaker",
      b: "Hank Aaron",
      c: "Pete Rose",
      d: "Derek Jeter",
    },
    correctAnswer: "c",
  },
  {
    question:
      "What team has the most World Series Championships in MLB history?",
    answers: {
      a: "Cardinals",
      b: "Pirates",
      c: "Red Sox",
      d: "Yankees",
    },
    correctAnswer: "d",
  },
  {
    question: "How many games does each team play throughout one MLB season?",
    answers: {
      a: "162",
      b: "82",
      c: "60",
      d: "155",
    },
    correctAnswer: "a",
  },
  {
    question: "Who holds the MLB record for the most career strikeouts?",
    answers: {
      a: "Randy Johnson",
      b: "Tom Seaver",
      c: "Bob Gibson",
      d: "Nolan Ryan",
    },
    correctAnswer: "d",
  },
];

// Variables
let count = 40;
let score = 0;
let currentQuestion = 0;
let timer;
var allScores = [];
var allUserNames = [];

//Local Storage Declarations

localStorage.setItem("name", allUserNames);

// Functions
const renderTimer = () => {
  // Decrements the timer and populates
  count--;
  timerEl.textContent = `Timer: ${count}`;
  if (count <= 0) {
    alert("Time expired! Try again!");
    window.location.href = "./index.html";
  }
};
const beginQuiz = () => {
  //Sets the intial timer interval
  timer = setInterval(renderTimer, 1000);
};

function checkAnswer() {
  // checks the target id of user click event and checks it against the current question correct answer, adds score and time if correct, subtracts if incorrect
  buttonSec.addEventListener("click", function (event) {
    if (
      event.target.tagName === "BUTTON" &&
      event.target.id == quizQuestions[currentQuestion].correctAnswer
    ) {
      alert("Correct!");
      count += 10;
      currentQuestion += 1;
      score += 1000;
      if (currentQuestion <= 4) {
        nextQuestion(currentQuestion);
      } else {
        pushScore();
        quizCompleted();
      }
    } else if (
      event.target.id != quizQuestions[currentQuestion] &&
      event.target.tagName === "BUTTON"
    ) {
      alert("Incorrect!");
      count -= 10;
      score -= 1000;
    }
  });
}

function nextQuestion() {
  // renders the next questions once a correct answer has been given
  for (i = 0; i < quizQuestions.length; i++) {
    quest.innerHTML = "<p>" + quizQuestions[currentQuestion].question + "</p>";
    buttonA.textContent = quizQuestions[currentQuestion].answers.a;
    buttonB.textContent = quizQuestions[currentQuestion].answers.b;
    buttonC.textContent = quizQuestions[currentQuestion].answers.c;
    buttonD.textContent = quizQuestions[currentQuestion].answers.d;
    scoreDisp.innerHTML = "<h3>" + "Score: " + score + "</h3>";
  }
}

function renderQuestion() {
  // renders the first question on begin quiz click
  let i = currentQuestion;
  quest.innerHTML = "<p>" + quizQuestions[i].question + "</p>";
  buttonA.textContent = quizQuestions[i].answers.a;
  buttonB.textContent = quizQuestions[i].answers.b;
  buttonC.textContent = quizQuestions[i].answers.c;
  buttonD.textContent = quizQuestions[i].answers.d;
  scoreDisp.innerHTML = "<h3>" + "Score: " + score + "</h3>";
  checkAnswer();
}

function quizCompleted() {
  //Following the last question, user is alerted and taken to the highscores page, score is stored to local storage
  localStorage.setItem("score", allScores);
  alert("Thank you for taking the quiz!");
  window.location.open = "./pages/highscores.html";
}

function pushScore() {
  JSON.stringify(allScores.push(score));
}

startQuiz.addEventListener("click", function () {
  // event listener for the begin quiz click that renders initial question/timer
  welcomeContainer.style.display = "none";
  quizContainer.style.display = "block";
  renderQuestion();
  beginQuiz();
});
