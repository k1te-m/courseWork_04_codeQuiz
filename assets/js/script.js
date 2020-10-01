// Select Elements
const welcomeContainer = document.querySelector("#welcome");
const quizContainer = document.querySelector("#quiz");
const startQuiz = document.querySelector("#begin");
const timerEl = document.querySelector("#timer");
const quest = document.querySelector("#question");
const choiceA = document.querySelector("#choiceA");
const choiceB = document.querySelector("#choiceB");
const choiceC = document.querySelector("#choiceC");
const choiceD = document.querySelector("#choiceD");
const buttonA = document.querySelector("#a");
const buttonB = document.querySelector("#b");
const buttonC = document.querySelector("#c");
const buttonD = document.querySelector("#d");
const scoreDisp = document.querySelector("#score");

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
let currentQuestion;
let timer;

// Functions
const renderTimer = () => {
  count--;
  timerEl.textContent = `Timer: ${count}`;
}
const beginQuiz = () => {
  timer = setInterval(renderTimer, 1000);
}

function renderQuestion() { // renders the next question to the question container
  quizContainer.addEventListener("click", function(event) {
    console.log(event.target.id)
    if (event.target.id === quizQuestions[0].correctAnswer){
      alert("Correct!");
      score = score + 100;
      count = count + 10;
    } else {
      alert("Incorrect! Try again!");
      score = score - 100;
      count = count -10;
    }
  });
  
  for (i = 0; i < quizQuestions.length; i++) {
    quest.innerHTML = "<p>"+ quizQuestions[0].question +"</p>";
    choiceA.innerHTML = "<button type='radio' id='a'>"+ quizQuestions[0].answers.a +"</button>";
    choiceB.innerHTML = "<button type='radio' id='b'>"+ quizQuestions[0].answers.b +"</button>";
    choiceC.innerHTML = "<button type='radio' id='c'>"+ quizQuestions[0].answers.c +"</button>";
    choiceD.innerHTML = "<button type='radio' id='d'>"+ quizQuestions[0].answers.d +"</button>";
    scoreDisp.innerHTML = "<h3>"+ 'Score: '+ score +"</h3>";

 
  }

  
  
}








// OnClick Begin
startQuiz.onclick = function () {
  welcomeContainer.style.display = "none";
  renderQuestion();
  quizContainer.style.display = "block";
  renderTimer();
  timer = setInterval(renderTimer,1000);
};


