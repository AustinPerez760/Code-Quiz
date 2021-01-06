const nickname = document.getElementById("nickname");
const userFinalScore = document.getElementById("userFinalScore");
const recentScore = localStorage.getItem("recentScore");

userFinalScore.innerText = recentScore;

nickname.addEventListener("keyup", () => {
  console.log("usernameInput.value");
});

function saveFinalScore() {
  console.log("clicked");
}
