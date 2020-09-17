// Generate the quiz questions
const quizQuestion = [
    {
        questions: "How to declare variable in Javascript?",
        answer1: "var name = Joe",
        answer2: "answer 1 and 3 are corret",
        answer3: "const yourAge = 30",
        answer4: "country = USA",
        correctAns: "answer 1 and 3 are corret",
    }, {
        questions: "What's the command for inserting a string into an array?",
        answer1: ".forEeach()",
        answer2: ".shift()",
        answer3: "myFunction()",
        answer4: ".push()",
        correctAns: ".push()",
    }, {
        questions: "How to log your value to browser console?",
        answer1: "cnsl.lg()",
        answer2: "console.println()",
        answer3: "console.log()",
        answer4: "const console = log()",
        correctAns: "console.log()",
    }, {
        questions: "What's the result of var x = (1 + 1 * 0) ? ",
        answer1: "1",
        answer2: "0",
        answer3: "2",
        answer4: "Undefined",
        correctAns: "1",
    }, {
        questions: "How to convert letters to upper case?",
        answer1: ".toUpperCase()",
        answer2: "var x = toUpperCase()",
        answer3: "changeToUpperCase()",
        answer4: ".shiftToUpperCase()",
        correctAns: ".toUpperCase()",
    }, {
        questions: "Loading",
        answer1: "Loading",
        answer2: "Loading",
        answer3: "Loading",
        answer4: "Loading",
        correctAns: "",
    }
];

// Declare the variables from HTML using the getElementById
var quizApp = document.getElementById("quizApp");
var questionOptions = document.getElementById("quiz-question");
var option1 = document.getElementById("choice1");
var option2 = document.getElementById("choice2");
var option3 = document.getElementById("choice3");
var option4 = document.getElementById("choice4");
var timer = document.getElementById("timer");
var entireAnswer = document.querySelectorAll(".answerOption");
var listPeople = document.querySelector("#listpeople");
var addButton = document.querySelector("#addbutton");
var form = document.querySelector(".create-form");
var questionList = document.querySelector(".question-list");
var hiding = document.querySelector(".hiding");
var nameEl = document.querySelector("#nameinput")

// State the start position
let previousChoice = "";
let currentState = 0;
let quizScore = 0;
var setTime = 60;
var people = [{name: "Steven"}];

// Add an event listener to the buttons and connect it with the iterate function
option1.addEventListener("click", iterate);
option2.addEventListener("click", iterate);
option3.addEventListener("click", iterate);
option4.addEventListener("click", iterate);

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

// Create a function to state the result
function iterate(){
    // Create variable of correct answer
    var correctAnswer = quizQuestion[currentState].correctAns;
    var lastAnswer = this.textContent;

    // Create a conditional statement
    if(correctAnswer === undefined){

    } else if(lastAnswer === correctAnswer){
        quizScore += 20;
        // Put a text for the correct answers
    } else {
        setTime -= 5;
    }
    currentState++;
    storeQuiz();

    // Store the quizScore in local storage
    localStorage.setItem("key", quizScore);
}

// Set the timer countdown function
function setTimerCountdown(){
    var timeCount = setInterval(function(){
        setTime--;
        timer.textContent = "Time: " + setTime;

        // Conditional statement if time = 0
        if(setTime === 0 || currentState >= 5){
            clearInterval(timeCount);
            quizScore += setTime;
            form.style.display = "block";
            hiding.style.display = "none";
        }
    }, 1000)
}

// On the result page, add list of person including the scores they achieved from Activity 19
function listOfPerson(event){
    event.preventDefault();
    // Create variable to add name to 
    var addName = nameEl.value;
    
    // Create if statement to check if the user put a name or not
    if(!addName){
        return alert("Please put your initials!")
    }

    // Create list of people who worked on the quiz
    var li = document.createElement("li");
    li.id = people.length;
    li.innerHTML = addName + " scoring " + quizScore + " points in the quiz";
    people.push({addName: addName});
    listPeople.appendChild(li);
    
    // Store name in local storage
    localStorage.setItem("key", addName);
}

// Store data in local storage
localStorage.setItem("key", quizScore);

// localStorage.setItem("key", quizScore); // key would be the text content of the input box on top of my submit button and quiz score will be the text content of the box on top of the submit button + quiz score
    // localStorage.getItem()
    // getItem()

// Add the event listener to the buttons
addButton.addEventListener("click", listOfPerson);

// Call the setTimerCountdown function to display the timer
setTimerCountdown();
