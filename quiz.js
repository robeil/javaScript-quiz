// creating variables 
var timer = document.getElementById("timer");
var mainTimer = document.getElementById("main");
var myListner = document.getElementById("start-btn");
var secondsLeft =15;

function setMyTime(){
    myListner.addEventListener("click", function(){
    
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timer.textContent = secondsLeft + "   left to the finish question !";
        
            if(secondsLeft === 0) {
              clearInterval(timerInterval);
              setNextQuestion()
            }
          }, 1000)
        });
}
function setNextQuestion() {
timer.textContent = "";
var timer = document.createElement("div");
timer.setAttribute("src", "div/question1");
question.appendChild(timer);
}
setMyTime();





var question1 = [
    {
        title: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    }
]
var question2 = [
    {
        title: 'The condition in an if / else statement is enclosed within ____.',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses'
    }
]
var question3 = [
    {
        title: "In JavaScript if you put a number in quotes, it will be treated as a text string.",
        choices: ["correct", "wrong"],
        answer: "alert"
    }
]

