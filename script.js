// questions
var startQuize = document.getElementById("quize");
var startButton = document.getElementById("start-btn");
var qurstionContainerElement = document.getElementById("question-container");
var question = document.getElementById("question");

/*var question = [
    { title: "In JavaScript if you put a number in quotes, it will be treated as a text string.",
    choices: [true,false],
    answer: "alert"
    },
]*/
var secondLeft = 15;

startQuize.addEventListener("click", function () {

    console.log("click");
});


function setTime() {

    var timerInterval = setInterval(function () {
        secondLeft--;
        startQuize.textContent = secondLeft + " secons left till next question";
        if (secondLeft === 0) {
            clearInterval(timerInterval);
            nextQuestion();
        }
    } * 1000);
}

function nextQuestion() {
    startQuize.textContent = "";
    var question1 = question;
}
setTime();
/*
var question = [
    { title: "In JavaScript if you put a number in quotes, it will be treated as a text string.",
    choices: [true,false],
    answer: "alert"
    },
]
startButton.addEventListener("click", startQuiz)

function startQuiz() {
    console.log('startQuiz');
}
*/





