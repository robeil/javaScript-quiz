// creating variables 
var timer = document.getElementById("timer");
var mainTimer = document.getElementById("main");
var myListner = document.getElementById("start-btn");
var resetScore = document.getElementById("clear-score");
var resetIntial = document.getElementById("initial");
var viewScore = document.getElementById("view");
var goBack = document.getElementById("go-back");
var questionContainer = document.getElementById("question-container");
var submitBtn = document.getElementById("submit");
var result = document.getElementById("result");
var userInput = "";
//var inputBtn = document.getElementById("input");
var secondsLeft = 75;
var counter = 0;
var i;
var questions = [
    {
        title: '(1) JavaScript was initialyy created to make web pages alive',
        choices: ['Correct', 'Wrong'],
        answer: 'Correct'
    },

    {
        title: '(2) The meaning of (this) keyword in the JavaScript is to refer__________',
        choices: ['current object', 'variable containing value', 'previus object'],
        answer: 'current object'
    },

    {
        title: '(3) In JavaScript if you put a number in quotes, it will be treated as a text string.',
        choices: ['Correct', 'Wrong'],
        answer: 'Correct'
    },
    {
        title: '(4) In the end of the JavaScript, what will appear?',
        choices: ['<script>', '</script>', '<html>'],
        answer: '</script>'
    },
    {
        title: '(5) In JavaScript, the__________ is object of target language data type enclosing the object of source language.',
        choices: ['form', 'wrapper', 'cursor'],
        answer: 'wrapper'
    }
]
let a
var currentQuestionIndex = 0;
var setIntervalId;
myListner.addEventListener("click", function () {
    //document.getElementById("score").classList.add("hide");
    document.getElementById("header").classList.add("hide");
    document.getElementById("question-container").style.display = ("block");
    setIntervalId = setInterval(countDown, 1000)
    myListner.style.display = "none"
    console.log("curr:", currentQuestionIndex, setIntervalId)
    showquestions()
})
function countDown() {
    document.getElementById("timer").innerHTML = secondsLeft--
    if (secondsLeft < 0) {
        showResults()
    }
}
function showResults() {
    clearInterval(setIntervalId)
    localStorage.setItem("highScore", secondsLeft)
    highScore = localStorage.getItem('highScore');
    viewScore.innerHTML = highScore;
    viewScore.classList.add("hide");
    goBack.classList.add("hide");
    resetScore.classList.add("hide");
    document.getElementById("btn").style.display = "block"
    document.getElementById("question-container").style.display = "none"
}
function showquestions() {
    console.log("show:", currentQuestionIndex)
    document.getElementById("questions").innerHTML = questions[currentQuestionIndex].title;
    var choices = questions[currentQuestionIndex].choices
    document.getElementById("choices").textContent = ""
    myListner.classList.add("hide")
    for (let i = 0; i < choices.length; i++) {
        console.log("inside the loop:", i)

        var button = document.createElement("button")

        button.textContent = choices[i]

        button.addEventListener("click", function () {
            button = choices[i];
            console.log(this.textContent);

            if (this.textContent === questions[currentQuestionIndex].answer) {
                document.getElementById("showAnswer").textContent = "correct";
            } else {
                document.getElementById("showAnswer").textContent = "wrong";
                secondsLeft = secondsLeft - 15
            }
            currentQuestionIndex++

            if (currentQuestionIndex >= questions.length) {
                showResults()
            }
            else {
                showquestions()
            }
        })
        document.getElementById("choices").appendChild(button)
    }
}
console.log("We are strating")

submitBtn.addEventListener("click", function (event) {

    // capture the data you want to send to local storage and console.log it
    // send it with localStorage.setItem(...)
    goBack.classList.remove("hide");
    resetScore.classList.remove("hide");
    resetIntial.classList.add("hide");
    submitBtn.classList.add("hide");
    viewScore.classList.remove("hide");

    function myFunction() {
        localStorage.getItem("initial");
        userInput.innerHTML = highScore;
    }

    /* if(event.target.matches(scoreInitial)){
         result.textContent = userInput;
         result.append(viewScore);
     }*/
});

goBack.addEventListener("click", function () {
    document.getElementById("header").classList.remove("hide");
    //myListner.classList.remove("hide");
    myListner.style.display = "block";
    timer.classList.remove("hide");
    showResults()
    clearInterval(setIntervalId)
    secondsLeft = 75;
    document.getElementById("timer").innerHTML = secondsLeft
    setIntervalId = setInterval(countDown, 1000)
    // re init all the valuews 
    resetScore.classList.add("hide");
    goBack.classList.add("hide");
    currentQuestionIndex = 0
    // showquestions()
    localStorage.clear(highScore);
})
resetScore.addEventListener("click", function () {
    viewScore.classList.add("hide");
    timer.classList.add("hide");
})
