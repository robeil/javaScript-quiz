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
    showquestions()
}) 
function countDown(){
    document.getElementById("timer").innerHTML=secondsLeft--
    if (secondsLeft < 0){
        showResults()
    }
}
function showResults(){
    clearInterval(setIntervalId)
    document.getElementById("btn").style.display = "block"
    document.getElementById("question-container").style.display = "none"
// hice the are of the questions and btn
//unhide the area with the submit buttons

}

function showquestions() {
    document.getElementById("questions").innerHTML=questions[currentQuestionIndex].title;
    var choices = questions[currentQuestionIndex].choices
    document.getElementById("choices").textContent=""
    for (let i = 0; i < choices.length; i++) {
       console.log("inside the loop:", i)
       
         var button = document.createElement("button")
         
         button.textContent=choices[i]

         button.addEventListener("click", function () {
             button = choices[i];
    /*let choices =          
if (button === )*/

        if (answer.correct) {
             button.dataset.correct = answer.correct

         button.addEventListener('click',selectAnswer)

     } 
           // get witch one was clicked and compare with the real one
            // then alert
                    // if wornkg seconsleft = secons  - 15
        
             currentQuestionIndex++

             if (currentQuestionIndex >= questions.length){
                showResults()
             }
             else{
                 showquestions()
             }
         })
         document.getElementById("choices").appendChild(button)
     }

    console.log("outside the loop")

    var questionContainer = document.getElementById("question-container");

    function selectAnswer(e) {
        let selectedButton = e.target
        let correct = selectedButton.dataset.correct
        setStatusClass(document.body, correct)
        Array.from(answerButtonsElement.children).forEach(button => {
            setStatusClass(button, button.dataset.correct)
        }) 
    }
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
    function clearStatusClass(element) {
        element.classList.add('correct')
        element.classList.add('wrong')
    }
}
}

