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



startButtonEl.addEventListener('click', function() {
    startQuiz();
    timerBegin();
})

function timerBegin() {
    timerEl.classList.remove("hide");
    var timeInterval = setInterval(function(){
        if (timeRemaining >= 1) {
            timeRemainingEl.textContent = timeRemaining;
            timeRemaining--;
        } else {
            clearInterval(timeInterval);
            showResults();
        }

    },1000)
}