// Generate the quiz questions
const quizQuestion = [
    {
        questions: "Who is the current president of USA?",
        answer1: "John F. Kennedy",
        answer2: "Donald Trump",
        answer3: "James Bond",
        answer4: "Travis Scott",
        correctAns: "answer2",
    }, {
        questions: "Who won Super Bowl 2019?",
        answer1: "Seattle Seahawks",
        answer2: "Houston Texans",
        answer3: "Los Angeles Rams",
        answer4: "New England Patriots",
        correctAns: "answer4",
    }, {
        questions: "Who is the instructor of our current Coding BootCamp?",
        answer1: "Ariana Grande",
        answer2: "Kaney West",
        answer3: "Joe Rehfuss",
        answer4: "Bill Gates",
        correctAns: "answer3",
    }, {
        questions: "What's the result of 1 + 1 * 0 ? ",
        answer1: "1",
        answer2: "0",
        answer3: "2",
        answer4: "Undefined",
        correctAns: "answer1",
    }, {
        questions: "Who was the first person to walk on the moon?",
        answer1: "Neil Amstrong",
        answer2: "Jimmy Neutron",
        answer3: "Jimmy Falon",
        answer4: "Ellen",
        correctAns: "answer1",
    }, {
        questions: "How many states are there in the US?",
        answer1: "49",
        answer2: "52",
        answer3: "51",
        answer4: "50",
        correctAns: "answer4",
    },
];

// Declare the variables from HTML using the getElementById
var quizApp = document.getElementById("quizApp");
var questionOptions = document.getElementById("quiz-question");
var option1 = document.getElementById("choice1");
var option2 = document.getElementById("choice2");
var option3 = document.getElementById("choice3");
var option4 = document.getElementById("choice4");
var submitButton = document.getElementById("submit");
var container = document.getElementById(".container");
var timer = document.getElementById("timer");
var result = document.getElementById("result");
var entireAnswer = document.getElementById(".answerOption");

// State the start position
let currentState = 0;
let quizScore = 0;
var setTime = 60;
// let currentAnswer = none;

// Call the quiz function
storeQuiz();

// Create function to store the quiz into the website
function storeQuiz(){
    // Declare variable to load the quiz question followed by the answer
    var loadCurrentQuestion = quizQuestion[currentState];

    // Set up the question to work along with the function
    questionOptions.textContent = loadCurrentQuestion.questions;
    option1.textContent = loadCurrentQuestion.answer1;
    option2.textContent = loadCurrentQuestion.answer2;
    option3.textContent = loadCurrentQuestion.answer3;
    option4.textContent = loadCurrentQuestion.answer4;
}

// Create a function to check if the result selected by user right or wrong
// function selectedAnswer(){
    
// }

// Add event listener to the submit button
submitButton.addEventListener("click", function(){

    if(currentState < quizQuestion.length){
        currentState++;
        storeQuiz();
    } else if (currentState === quizQuestion.length - 1){
        quizApp.innerHTML = `<button>Next</button>`;
    } else {
        quizApp.innerHTML = `<h2>You're done with the Quiz!!! Here's the result:</h2>
        <button onclick="location.reload()">Reload</button>`;
    }
})

// Set the timer countdown function
function setTimerCountdown(){
    var timeCount = setInterval(function(){
        setTime--;
        timer.textContent = "Time: " + setTime;

        // Conditional statement if time = 0
        if(setTime === 0){
            clearInterval(timeCount);
            // getResult();
        }
    }, 1000)
}

// Set the result page to show after last question has been answered
// function getResult(){
//     timer.textContent = currentState + " seconds";

//     result.textContent = "Here's the result"
// }

// Call the setTimerCountdown function to display the timer
setTimerCountdown();

// Testing
console.log("+++++++++++++++++")