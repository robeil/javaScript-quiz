// creating variables 
var timer = document.getElementById("timer");
var mainTimer = document.getElementById("main");
var myListner = document.getElementById("start-btn");
var resert = document.getElementById("clear-score");
var secondsLeft = 75;
var counter = 0;
var i;
var questions = [
    {
        title: '(1) JavaScript was initialyy created to make web pages alive',
        choices: ['Worrect', 'Wrong'],
        answer: 'alerts'
    },

    {
        title: '(2) The meaning of (this) keyword in the JavaScript is to refer__________',
        choices: ['current object', 'variable containing value', 'previus object'],
        answer: 'current object'
    },

    {
        title: '(3) In JavaScript if you put a number in quotes, it will be treated as a text string.',
        choices: ['Correct', 'Wrong'],
        answer: 'alert'
    },
    {
        title: '(4) In the end of the JavaScript, what will appear?',
        choices: ['<script>','</script>','<html>'],
        answer: '</script>'
    },
    {
        title: '(5) In JavaScript, the__________ is object of target language data type enclosing the object of source language.',
        choices:['form','wrapper','cursor'],
        answer: 'wrapper'
    }
]

var currentQuestionIndex = 0;
var setIntervalId;
myListner.addEventListener("click",function() { 
    document.getElementById("header").classList.add("hide");
    document.getElementById("question-container").classList.remove("hide");
    setIntervalId = setInterval(countDown, 1000)
}) 

function countDown() {
    document.getElementById("questions").innerHTML=questions[currentQuestionIndex].title
    var choices = questions[currentQuestionIndex].choices
    document.getElementById("choices").textContent=""
    for (let i = 0; i < choices.length; i++) {
       
         var button = document.createElement("button")
         
         button.textContent=choices[i]
         button.addEventListener("click", function () {
             currentQuestionIndex++
         })
         document.getElementById("choices").appendChild(button)
     }
    document.getElementById("timer").innerHTML=secondsLeft--
}

var questionContainer = document.getElementById("question-container");
