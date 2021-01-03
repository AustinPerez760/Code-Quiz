// Let the begin button intiate the quiz through an event and function that fires out html
const question = document.getElementById("quiz-question");
const answers = Array.from(document.getElementsByClassName("answer-text"));
console.log(answers);
const beginButton = document.getElementById("begin-btn");
const promptContainerElement = document.getElementById("prompt-container");
// var promptElement = document.getElementById("prompt");
// var answerButtonElement = document.getElementById("answer-choices");
beginButton.addEventListener("click", beginButtonStart);

//Variables
var currentQuestion = {};
var sortingAnswer = true;
var questionCount = 0;
var avalibleQuestions = [];

//functions
function beginButtonStart() {
  console.log("started");
  beginButton.classList.add("hide");
  promptContainerElement.classList.remove("hide");
}

//displayNextPrompt();

// // Function needed to prompt next question
// function displayNextPrompt() {
//   showPrompt();
// }

// function showPrompt(prompt) {}

// prompts to eventually be cycled through by a function and or for loop using and object and array
const questions = [
  {
    question: "Which American Football Team Has Won the Most Super Bowls?",
    answer1: ["Las Vegas Raiders", "incorrect"],
    answer2: ["New England Patriots", "correct 6 "],
    answer3: ["Dallas Cowboys", "incorrect"],
    answer4: ["Pitsburgh Steelers", "incorrect"],
  },
  {
    question: "Which NBA Team Has Won the most NBA titles?",
    answer1: ["Chicago Bulls", "incorrect"],
    answer2: ["Boston Celtics", "correct "],
    answer3: ["Golden State Warriors", "incorrect"],
    answer4: ["Los Angeles Lakers", "correct "],
  },
  {
    question:
      "Which MLB team achieved the most wins in a single regular season?",
    answer1: ["Seattle Mariners", "correct"],
    answer2: ["Chicago Cubs", "incorrect"],
    answer3: ["Los Angeles Dodgers", "incorrect"],
    answer4: ["New York Yankees", "incorrect"],
  },
  {
    question: "Which mens college basketball coach has the most career wins?",
    answer1: ["Mike Krzyzewski", "correct"],
    answer2: ["Bob Knight", "incorrect"],
    answer3: ["Jim Calhoun", "incorrect"],
    answer4: ["Roy Williams", "incorrect"],
  },
  {
    question: "Which tennis player has claimed the most Grand Slam titles?",
    answer1: ["Steffi Graf", "incorrect"],
    answer2: ["Serena Williams", "correct"],
    answer3: ["Rodger Federer", "incorrect"],
    answer4: ["Pete Sampras", "incorrect"],
  },
  {
    question: "Which nation has claimed the most World Cups",
    answer1: ["Germany", "incorrect"],
    answer2: ["Italy", "incorrect"],
    answer3: ["France", "incorrect"],
    answer4: ["Brazil", "correct"],
  },
  {
    question: "Which NFL player has won the most MVP award's",
    answer1: ["Tom Brady", "incorrect"],
    answer2: ["Brett Favre", "incorrect"],
    answer3: ["Peyton Manning", "correct"],
    answer4: ["Aaron Rodgers", "incorrect"],
  },
  {
    question:
      "Which English Premier League Team has claimed the most EPL league titles?",
    answer1: ["Manchester United", "correct"],
    answer2: ["Arsenal FC", "incorrect"],
    answer3: ["Liverpool FC", "incorrect"],
    answer4: ["Manchester City", "incorrect"],
  },
  {
    question: "Which MLB team has won the most World Series titles",
    answer1: ["Boston Red Socks", "incorrect"],
    answer2: ["San Francisco Giants", "incorrect"],
    answer3: ["New York Yankees", "correct"],
    answer4: ["St.Luis Cardinals", "incorrect"],
  },
  {
    question: "Which women is the most decorated olypian of the modern era?",
    answer1: ["Marit Bjorgen", "incorrect"],
    answer2: ["Brigit Fischer", "incorrect"],
    answer3: ["Jenny Thompson", "incorrect"],
    answer4: ["Larisa Latynina", "correct"],
  },
];
