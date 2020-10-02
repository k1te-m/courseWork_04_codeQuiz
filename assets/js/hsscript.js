const nameEl = document.getElementById("name");
const subBtn = document.getElementById("submit-btn");
const hsBrd = document.getElementById("highscoreBrd");
const userN = document.getElementById("user-name");
const userS = document.getElementById("user-score");
var storedName = localStorage.getItem("name");
var storedScore = localStorage.getItem("score");

console.log(nameEl);
console.log(subBtn);
console.log(hsBrd);

// subBtn.addEventListener("submit", )
subBtn.addEventListener("click", function(){
    localStorage.setItem("name", nameEl.value);
    event.preventDefault();
})


// userN.textContent = storedName;
// userS.textContent = storedScore;
