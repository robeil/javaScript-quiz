// creating variables 
var timer = document.getElementById("timer");
var mainTimer = document.getElementById("main");
var myListner = document.getElementById("start-btn");
var secondsLeft = 5;
var counter = 0;
var i;
var j;
var questions = [
    {
        title: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },

    {
        title: 'The condition in an if / else statement is enclosed within ____.',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses'
    },

    {
        title: "In JavaScript if you put a number in quotes, it will be treated as a text string.",
        choices: ["correct", "wrong"],
        answer: "alert"
    }
]

var currentQuestionIndex = 0;

var questionContainer = document.getElementById("question-container");
// creating set time
function setMyTime() {

    myListner.addEventListener("click", function() {

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds remaining !";

        if (secondsLeft === 0) {
            clearInterval(setTimeout);

            //if your are answering the last question callquizEnd function
            // if it is not a last question then call getNextQuestion()
            /*getNextQuestion();*/
        }
    }, 1000)
});
}//end setMyTimer fct def
setMyTime();
/*
function getNextQuestion() {
    var currentQuestion = questions[currentQuestionIndex];

    // display this currentQuestion in the question container
    // another fr loop to display all the options related to questions
}
*/
function startQuiz() {
    
    for (i = 0; i < questions.length; i++) {
        // questionContainer.append(JSON.stringify(questions[i]));
        questionContainer.append(JSON.stringify(questions[0].title));
        // add an another for loop to looop through the options
        console.log(questions[i].choices);
         for (var j = 0; j < questions.length; j++) {
             console.log(questions[i].choices[j]);
         }

    }

   /*
   for (i = 0; i < questions.length; i++) {
    for (var j = 0; j < questions[i].choices.length; j++) {
        questionContainer.append(JSON.stringify(questions[0].title));
            console.log(questions[i].choices[j]);
    }*/  
        }
//end startQuiz fct def
startQuiz();

//function setNextQuestion(){
  // var ctrl = document.getElementsByName("questions");
//         for (var i = 0; i < questions.length; ++i) {
//             if (questions[i].checked == true) {
//                 if (i == questions.length - 1) {
//                     document.getElementsByName("ctrl")[0].checked = true;
//                 } else {
//                     document.getElementsByName("ctrl")[i + 1].checked = true;
//                 }
//                 break;
//             }  

//Next Steps:
//0. Write a gameOver function
//1. Stop quiz when  timer reaches 0 sec (hint put if stmnt in setTimer fct to wait for this condition)
//2. In startQuiz, render on the page teh first question in array
//3. Write nextQuestion fct 