// Select Elements
const welcomeContainer = document.querySelector("#welcome");
const quizContainer = document.querySelector("#quiz");
const startQuiz = document.querySelector("#begin");
const timerEl = document.querySelector("#timer");
const quest = document.querySelector("#question");
// const choiceA = document.querySelector("#choiceA");
// const choiceB = document.querySelector("#choiceB");
// const choiceC = document.querySelector("#choiceC");
// const choiceD = document.querySelector("#choiceD");
const buttonA = document.querySelector("#a");
const buttonB = document.querySelector("#b");
const buttonC = document.querySelector("#c");
const buttonD = document.querySelector("#d");
const scoreDisp = document.querySelector("#score");
// const buttonA = document.querySelector("#choiceA");
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
        correctAnswer: "c"
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
let currentQuestion = 0;
let timer;

// Functions
const renderTimer = () =>  {
  count--;
  timerEl.textContent = `Timer: ${count}`;
}
const beginQuiz = () => {
  timer = setInterval(renderTimer, 1000);
}

function checkAnswer() {
  buttonSec.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON" && event.target.id === quizQuestions[currentQuestion].correctAnswer) {
      alert("Correct!");
      count += 10;
      currentQuestion+=1;
      score += 1000;
      console.log(currentQuestion);
      if (currentQuestion <= 4) {
        nextQuestion(currentQuestion);
      }
    } 
  })
}

function nextQuestion() {
  for (i = 0; i < quizQuestions.length; i++) {
    quest.innerHTML = "<p>"+ quizQuestions[currentQuestion].question +"</p>";
    buttonA.textContent = quizQuestions[currentQuestion].answers.a;
    buttonB.textContent = quizQuestions[currentQuestion].answers.b;
    buttonC.textContent = quizQuestions[currentQuestion].answers.c;
    buttonD.textContent = quizQuestions[currentQuestion].answers.d;
    scoreDisp.innerHTML = "<h3>"+ 'Score: '+ score +"</h3>";
  }
}

function renderQuestion() { // renders the next question to the question container
    let i = currentQuestion;
    quest.innerHTML = "<p>"+ quizQuestions[i].question +"</p>";
    buttonA.textContent = quizQuestions[i].answers.a;
    buttonB.textContent = quizQuestions[i].answers.b;
    buttonC.textContent = quizQuestions[i].answers.c;
    buttonD.textContent = quizQuestions[i].answers.d;
    scoreDisp.innerHTML = "<h3>"+ 'Score: '+ score +"</h3>";
    checkAnswer();
}





// console.log(choiceEls);
    // quizContainer.addEventListener("click", function(event) { // Not working as intended, clicks anywhere inside of the quizContainer are being captured as incorrect
    //   console.log(event.target.id)
    //   if (event.target.id === quizQuestions[0].correctAnswer){
    //     alert("Correct!");
    //     score = score + 100;
    //     count = count + 10;  
    //     // return renderQuestion;
    //   } else {
    //     alert("Incorrect! Try again!");
    //     score = score - 100;
    //     count = count -10;
    //   }
    // });

  
  
// }








// OnClick/Event Listeners
startQuiz.onclick = function () {
  welcomeContainer.style.display = "none";
  renderQuestion(0);
  quizContainer.style.display = "block";
  renderTimer();
  beginQuiz();
};



