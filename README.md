# TriviaGame

// var questions[] is linked externally
var TESTING_MODE = false;

var TIME_REMAINING = TESTING_MODE ? 1 : 15;
var DELAY_ANSWER = TESTING_MODE ? 0 : 1500;
var DELAY_QUESTION = TESTING_MODE ? 0 : 7000;

var clockId;
var clockRunning = false;
var timer = 0;
var timeLimit;
var countRight = 0;
var countWrong = 0;
var countUnanswered = 0;
var pickedAnswer = false;

function resetGame()
function startTimer()
function stopTimer() 
function countTimer()
function printBSCard()
function printStatus(flag)
function answerNone()
function answerRight()
function answerWrong()
function colorAnswers()
function updateStatus()
function startPage()
function resetQuestionDisplay()
function preNumtoChar(number)
function printQuestions()
function startGame()

$(document).ready(function ()
    startPage();
    $(document).on("click", ".start-button", function (event)
    $(document).on("click", ".answer", function (event)
    $(document).on("click", ".restart-button", function (event)
