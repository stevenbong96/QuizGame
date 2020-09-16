// Generate the quiz questions
const quizQuestion = [
    {
        questions: "How to declare variable in Javascript?",
        answer1: "var name = Joe",
        answer2: "answer 1 and 3 are corret",
        answer3: "const yourAge = 30",
        answer4: "country = USA",
        correctAns: "answer2",
    }, {
        questions: "What's the command for inserting a string into an array?",
        answer1: ".forEeach()",
        answer2: ".shift()",
        answer3: "myFunction()",
        answer4: ".push()",
        correctAns: "answer4",
    }, {
        questions: "How to log your value to browser console?",
        answer1: "cnsl.lg()",
        answer2: "console.println()",
        answer3: "console.log()",
        answer4: "const console = log()",
        correctAns: "answer3",
    }, {
        questions: "What's the result of var x = (1 + 1 * 0) ? ",
        answer1: "1",
        answer2: "0",
        answer3: "2",
        answer4: "Undefined",
        correctAns: "answer1",
    }, {
        questions: "How to conver letters to upper case?",
        answer1: ".toUpperCase()",
        answer2: "var x = toUpperCase()",
        answer3: "changeToUpperCase()",
        answer4: ".shiftToUpperCase()",
        correctAns: "answer1",
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
var entireAnswer = document.querySelectorAll(".answerOption");
var listPeople = document.querySelector("#listpeople");
var addButton = document.querySelector("#addbutton");
var quizScore = document.getElementById("score");

// State the start position
let currentState = 0;
// let quizScore = 0;
var setTime = 60;
var people = [{name: "Steven"}];
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
function selectedAnswer(){
    let checkAnswer = undefined;
    // Check this loop
    entireAnswer.forEach(function(entireAnswer){
        if(entireAnswer.checked){
            checkAnswer = entireAnswer.id;
        }
    });
    return checkAnswer;
}

// Clear the selected answer function
function clearAnswer(){
    // Also check this loop
    entireAnswer.forEach(function(entireAnswer){
        entireAnswer.checked = false;
    })
}

// Add event listener to the submit button
submitButton.addEventListener("click", function(){
    // Check the answer
    var answerChoices = selectedAnswer();

    if(answerChoices){
        // Check variables
        if(answerChoices === quizQuestion[currentState].correctAns){
            quizScore.textContent = quizScore;
            // score = score + 20;
        }
        currentState++;
        if(currentState < quizQuestion.length){
            storeQuiz();
        } else if (currentState === quizQuestion.length - 1){
            quizApp.innerHTML = `<button>Submit</button>`;
        } else {
            quizApp.innerHTML = `<h2>You're done with the Quiz!!! Here's the result:</h2>
            <form>
            <ul id="listpeople"></ul>
                <input type="text" id="nameinput" placeholder="Put your name here">
                <button id="addbutton">Add to the Honorable Mentions</button>
            </form>
            <button onclick="location.reload()">Reload</button>`;
        }
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

// On the result page, add list of person including the scores they achieved from Activity 19
function listOfPerson(event){
    event.preventDefault();
    // Create variable to add name to 
    var addName = nameList.value;
    var li = document.createElement("li");
    li.id = people.length;
    li.innerHTML = name;
    people.push({name: name});
    listPeople.appendChild(li);

    // Create if statement to check if the user put a name or not
    if(!name){
        return
    }
}

// Add the event listener to the buttons
// addButton.addEventListener("click", listOfPerson());

// Call the setTimerCountdown function to display the timer
setTimerCountdown();
