// questions
var startButton = document.getElementById("start-btn");
var qurstionContainerElement = document.getElementById("question-container");
var question = document.getElementById("question");

var questions = [
    { title: "In JavaScript if you put a number in quotes, it will be treated as a text string.",
    choices: [true,false],
    answer: "alert"
    },
]
startButton.addEventListener("click", startQuiz)

function startQuiz() {
    console.log('startQuiz')
