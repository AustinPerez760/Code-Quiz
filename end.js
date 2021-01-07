const nickname = document.getElementById("nickname");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const userFinalScore = document.getElementById("userFinalScore");
const recentScore = localStorage.getItem("recentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;
console.log(highScores);

userFinalScore.innerText = recentScore;

nickname.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !nickname.value;
});

saveHighScore = (e) => {
  console.log("clicked button");
  e.preventDefault();

  const score = {
    score: Math.floor(Math.random() * 100),
    nickname: nickname.value,
  };
  highScores.push(score);
  highScores.sort((a, b) => {
    return b.score - a.score;
  });
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("index.html");

  console.log(highScores);
};
