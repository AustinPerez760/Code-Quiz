// Let the begin button intiate the quiz through an event and function that fires out html
const question = document.getElementById("quiz-question");
const answers = Array.from(document.getElementsByClassName("answer-text"));
const questionProgress = document.getElementById("questionProgress");
const quizTime = document.getElementById("quizTime");
//Constants for the begin button to initate the quiz
const beginButton = document.getElementById("begin-btn");
const promptContainerElement = document.getElementById("prompt-container");
// var promptElement = document.getElementById("prompt");
// var answerButtonElement = document.getElementById("answer-choices");
beginButton.addEventListener("click", beginButtonStart);

//Variables
var currentQuestion = {};
var sortingAnswers = false;
var questionCount = 0;
var score = 0;
var availableQuestions = [];

//CONSTANTS for amount of question the user will recieve
const MAX_QUESTIONS = 10;

//begin function to initiate dynamic quiz onclick
function beginButtonStart() {
  console.log("started");
  beginButton.classList.add("hide");
  promptContainerElement.classList.remove("hide");
}

// Questions object
let questions = [
  {
    question: "Which American Football Team Has Won the Most Super Bowls?",
    answer1: "Las Vegas Raiders",
    answer2: "New England Patriots",
    answer3: "Dallas Cowboys",
    answer4: "Pitsburgh Steelers",
    answer: 2,
  },
  {
    question: "Which NBA Team Has Won the most NBA titles?",
    answer1: "Chicago Bulls",
    answer2: "Boston Celtics",
    answer3: "Golden State Warriors",
    answer4: "Los Angeles Lakers",
    answer: 2 && 4,
  },
  {
    question:
      "Which MLB team achieved the most wins in a single regular season?",
    answer1: "Seattle Mariners",
    answer2: "Chicago Cubs",
    answer3: "Los Angeles Dodgers",
    answer4: "New York Yankees",
    answer: 1,
  },
  {
    question: "Which mens college basketball coach has the most career wins?",
    answer1: "Mike Krzyzewski",
    answer2: "Bob Knight",
    answer3: "Jim Calhoun",
    answer4: "Roy Williams",
    answer: 1,
  },
  {
    question: "Which tennis player has claimed the most Grand Slam titles?",
    answer1: "Steffi Graf",
    answer2: "Serena Williams",
    answer3: "Rodger Federer",
    answer4: "Pete Sampras",
    answer: 2,
  },
  {
    question: "Which nation has claimed the most World Cups?",
    answer1: "Germany",
    answer2: "Italy",
    answer3: "France",
    answer4: "Brazil",
    answer: 4,
  },
  {
    question: "Which NFL player has won the most MVP award's?",
    answer1: "Tom Brady",
    answer2: "Brett Favre",
    answer3: "Peyton Manning",
    answer4: "Aaron Rodgers",
    answer: 3,
  },
  {
    question:
      "Which English Premier League Team has claimed the most EPL league titles?",
    answer1: "Manchester United",
    answer2: "Arsenal FC",
    answer3: "Liverpool FC",
    answer4: "Manchester City",
    answer: 1,
  },
  {
    question: "Which MLB team has won the most World Series titles?",
    answer1: "Boston Red Socks",
    answer2: "San Francisco Giants",
    answer3: "New York Yankees",
    answer4: "St.Luis Cardinals",
    answer: 3,
  },
  {
    question: "Which women is the most decorated olypian of the modern era?",
    answer1: "Marit Bjorgen",
    answer2: "Brigit Fischer",
    answer3: "Jenny Thompson",
    answer4: "Larisa Latynina",
    answer: 4,
  },
];

function startQuiz() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];

  getNewQuestion();
}
// function grabs a new question from the question object and applys prompts it to the avalibleQuestion empty array
function getNewQuestion() {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //if quiz is over return to homepage
    return window.location.assign("");
  }

  questionCount++;
  questionProgress.innerText = questionCount + "/" + MAX_QUESTIONS;

  var questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  //Function allows us to grab the number dataset and replace it with our text from question array
  answers.forEach((answer) => {
    const number = answer.dataset["number"];
    answer.innerText = currentQuestion["answer" + number];
  });

  //This allows us to cycle out the questions that have already appeared NO DUPLICATES
  availableQuestions.splice(questionIndex, 1);

  //Once questions are loaded user can start selction
  sortingAnswers = true;
}

answers.forEach((answer) => {
  answer.addEventListener("click", (e) => {
    if (!sortingAnswers) return;

    sortingAnswers = false;

    const selectedAnswer = e.target;
    const answer = selectedAnswer.dataset["number"];

    var classToRun = "incorrect";
    if (answer == currentQuestion.answer) {
      classToRun = "correct";
    }
    selectedAnswer.parentElement.classList.add(classToRun);
    //delay so class does not applied and then removed immediatley
    setTimeout(() => {
      selectedAnswer.parentElement.classList.remove(classToRun);
      getNewQuestion();
    }, 1000);

    console.log(classToRun);

    //console.log(answer == currentQuestion.answer);
  });
});

startQuiz();

//displayNextPrompt();

// // Function needed to prompt next question
// function displayNextPrompt() {
//   showPrompt();
// }

// function showPrompt(prompt) {}

// prompts to eventually be cycled through by a function and or for loop using and object and array
