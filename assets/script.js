var startButtonEl = document.querySelector("#start");
var highScoreButtonEl = document.querySelector("#highScoreBtn");
var questionContainerEl = document.querySelector(".quiz-container");
var questionTextEl = document.querySelector("#question");
var answerTextEl = document.querySelector("#answers");
var resultsEl = document.querySelector("#results");
var timerEl = document.querySelector("#timer");
var timeRemainingEl = document.querySelector("#timeRemaining");
var timeRemaining = 60;
var scoreSaveEl = document.querySelector("scoreSave");
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");
var score = 0;
var highscore = [];
var initials = [];
var questionNumber = 0;
var timeInterval;

var quiz = [
    {
    question: "1. Which class uses a spellbook to store their spells and must prepare which spells they need?",
    choices: [
        { text: "Bard", correct: false},
        { text: "Cleric", correct : false},
        { text: "Druid", correct : false},
        { text: "Wizard", correct : true },
    ]
}, {
    question: "2. Which class has the rage mechanic?",
    choices: [
        { text: "Barbarian", correct: true},
        { text: "Warlock", correct : false},
        { text: "Monk", correct : false},
        { text: "Fighter", correct : false },
    ]
}, {
    question: "3. Which class has a unique language that is only accessible to that class?",
    choices: [
        { text: "Barbarian", correct: false},
        { text: "Sorcerer", correct : false},
        { text: "Cleric", correct : false},
        { text: "Rogue", correct : true },
    ]
}, { 
    question: "4. Which class uses divine magic recieved from a deity?",
    choices: [
        { text: "Bard", correct: false},
        { text: "Cleric", correct : true},
        { text: "Paladin", correct : false},
        { text: "Fighter", correct : false },
    ]
}, {
    question: "5. Which class uses divine magic derived from nature?",
    choices: [
        { text: "Paladin", correct: false},
        { text: "Monk", correct : true},
        { text: "Druid", correct : false},
        { text: "Ranger", correct : false },
    ]
}];

startButtonEl.addEventListener('click', function() {
    startQuiz();
    timerBegin();
});

function timerBegin() {
    timerEl.classList.remove("hide");
    timeInterval = setInterval(function(){
        if (timeRemaining >= 1) {
            timeRemainingEl.textContent = timeRemaining;
            timeRemaining--;
        } else {
            clearInterval(timeInterval);
            showResults();
        }

    },1000);
};

function startQuiz() {
    startButtonEl.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    askQuestion();
};

function askQuestion() {
    questionTextEl.textContent = quiz[questionNumber].question;
    answer1El.textContent = quiz[questionNumber].choices[0].text;
    answer1El.value = quiz[questionNumber].choices[0].correct;
    answer2El.textContent = quiz[questionNumber].choices[1].text;
    answer2El.value = quiz[questionNumber].choices[1].correct;
    answer3El.textContent = quiz[questionNumber].choices[2].text;
    answer3El.value = quiz[questionNumber].choices[2].correct;
    answer4El.textContent = quiz[questionNumber].choices[3].text;
    answer4El.value = quiz[questionNumber].choices[3].correct;
};

function userAnswer() {
    if(this.value === "true") {
        score = timeRemaining;

    } else{
        timeRemaining = timeRemaining - 10;
    };

    questionNumber++;
    

    if (questionNumber === quiz.Length) {
        clearInterval(timeInterval);

        
    }
};