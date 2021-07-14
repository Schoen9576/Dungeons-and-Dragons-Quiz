var startButtonEl = document.querySelector("#start")
var highScoreButtonEl = document.querySelector("#highScoreBtn") 
var questionContainerEl = document.querySelector(".quiz-container")
var questionTextEl = document.querySelector("#question")
var answerTextEl = document.querySelector("#answers")
var resultsEl = document.querySelector("#results")
var timerEl = document.querySelector("#timer")
var timeRemainingEl = document.querySelector("#timeRemaining")
var timeRemaining = 60;

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