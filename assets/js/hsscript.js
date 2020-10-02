const nameEl = document.getElementById("name");
const subBtn = document.getElementById("submit-btn");
const hsBrd = document.getElementById("highscoreBrd");
const userN = document.getElementById("user-name");
const userS = document.getElementById("user-score");
const h5ElN = document.createElement("h5");
h5ElN.id = "user1";
const h5ElS = document.createElement("h5");
h5ElS.id = "score1";

var allUserNames = [];

function pushNames() {
    allUserNames.push(nameEl.value);
}

function appendName() {
    userN.appendChild(h5ElN);
    document.getElementById("user1").textContent = localStorage.getItem("name");
}
function appendScore() {
    userS.appendChild(h5ElS);
    document.getElementById("score1").textContent = localStorage.getItem("score");
}

subBtn.addEventListener("click", function() {
    localStorage.setItem("name", nameEl.value);
    appendName();
    appendScore();
    event.preventDefault();
})

// console.log(userName);
// localStorage.setItem("name", userName);







