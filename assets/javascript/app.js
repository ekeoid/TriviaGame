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

function resetGame() {
    for (var x = 0; x < questions.length; x++) {
        for (var y = 0; y < questions[x].answerChoices.length; y++) {
            questions[x].answerChoices[y].isUsed = false;
        }
        questions[x].isAnswered = false;
    }

    countRight = 0;
    countWrong = 0;
    countUnanswered = 0;
    pickedAnswer = false;

    $(".restart-area").hide();
    $(".question-area").show();
}

function startTimer() {
    if (!clockRunning) {
        clockId = setInterval(countTimer, 1000);
        clockRunning = true;
    }
}

function stopTimer() {
    clearInterval(clockId);
    clockRunning = false;
}

function countTimer() {
    if (timeLimit == 0) {
        stopTimer();
        if ((countRight + countWrong + countUnanswered) < questions.length) {
            answerNone();
        }
    } else {
        timeLimit--;
    }
    $(".timer").text(timeLimit);
}

function printBSCard() {
    $("table").append( "<div class=\"card border-dark\">\
                            <div class=\"card-body bg-secondary\">\
                                <h5 class=\"card-title\">Card title</h5>\
                                <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>\
                                <p class=\"card-text\">Body</p>\
                            </div>\
                        </div>");
}

function printStatus(flag) {
    var correctAns = $(".answer-right").text();
    var correctIndex = $(".answer-right").attr("index");

    if (flag == "none") {
        $("table").empty();
        printBSCard();
        $(".card-title").text("Out of Time!!!");
        $(".card-subtitle").text("The correct answer is " + correctAns);
        $(".card-text").text(questions[correctIndex].info);
    }

    if (flag == "right") {
        $("table").empty();
        printBSCard();
        $(".card-title").text("You are so SMART!");
        $(".card-subtitle").text("");
        $(".card-text").text(questions[correctIndex].info);
    }

    if (flag == "wrong") {
        $("table").empty();
        printBSCard();
        $(".card-title").text("You are Wrong...");
        $(".card-subtitle").text("The correct answer is " + correctAns);
        $(".card-text").text(questions[correctIndex].info);
    }

    if (flag == "done") {
        $("table").empty();
        printBSCard();
        $(".card-title").text("All done, here\'s how you did!");
        $(".card-subtitle").text("");
        $(".card-text").html("<ul></ul>");
        $("ul").append("<li>Correct Answers: " + countRight + "</li>");
        $("ul").append("<li>Incorrect Answers: " + countWrong + "</li>");
        $("ul").append("<li>Unanswered: " + countUnanswered + "</li>");
        
        $(".status-area").hide();
        $(".restart-area").show();
    }
}

function answerNone() {
    countUnanswered++;
    updateStatus();
    stopTimer();

    setTimeout(function () { printStatus("none"); }, DELAY_ANSWER);
    setTimeout(printQuestions, DELAY_QUESTION);
    
    if ((countRight + countWrong + countUnanswered) >= questions.length) {
        setTimeout(function () { printStatus("done"); }, DELAY_ANSWER);
    }
}

function answerRight() {
    countRight++;
    colorAnswers();
    updateStatus();
    stopTimer();

    setTimeout(function () { printStatus("right"); }, DELAY_ANSWER);

    if ((countRight + countWrong + countUnanswered) < questions.length) {
        setTimeout(printQuestions, DELAY_QUESTION);
    } else {
        setTimeout(function () { printStatus("done"); }, DELAY_ANSWER);
    }
}

function answerWrong() {
    countWrong++;
    colorAnswers();
    updateStatus();
    stopTimer();

    setTimeout(function () { printStatus("wrong"); }, DELAY_ANSWER);

    if ((countRight + countWrong + countUnanswered) < questions.length) {
        setTimeout(printQuestions, DELAY_QUESTION);
    } else {
        setTimeout(function () { printStatus("done"); }, DELAY_ANSWER);
    }
}

function colorAnswers() {

    $(".answer-picked").css("font-weight", "bolder");
    $(".answer-wrong").addClass("bg-danger");
    $(".answer-wrong").css("color", "#111");
    $(".answer-right").addClass("bg-success");
    $(".answer-right").css("color", "#333");
}

function updateStatus() {
    $(".questions").text(questions.length - (countRight + countWrong + countUnanswered));
    $(".correct").text(countRight);
    $(".incorrect").text(countWrong);
}

function startPage() {
    $(".start-area").show();
    $(".status-area").hide();
    $(".question-area").hide();
    $(".restart-area").hide();
}

function resetQuestionDisplay() {
    $("table").empty();
    pickedAnswer = false;
    timeLimit = TIME_REMAINING;
    startTimer();
}

function preNumtoChar(number) {
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[number - 1];
}

function printQuestions() {
    var randomAns;
    var randomQue;
    var answersCount = 0;
    var questionsCount = countRight + countWrong + countUnanswered;

    resetQuestionDisplay();

    while (questionsCount < questions.length) {
        randomQue = Math.floor(Math.random() * questions.length);

        if (!questions[randomQue].isAnswered) {
            break;
        }
    }

    if (questionsCount < questions.length) {
        if (!questions[randomQue].isAnswered) {

            $("table").append("<thead>").append("<tbody>");
            $("thead").append("<tr>");
            $("tr").append("<th>");
            $("th").text(questions[randomQue].question);
            questions[randomQue].isAnswered = true;

            while (answersCount < questions[randomQue].answerChoices.length) {

                randomAns = Math.floor(Math.random() * questions[randomQue].answerChoices.length);
                if (!questions[randomQue].answerChoices[randomAns].isUsed) {
                    answersCount++;

                    var answerTR = $("<tr>");
                    var answerTD = $("<td>").text(preNumtoChar(answersCount) + ": " + questions[randomQue].answerChoices[randomAns].answer);

                    if (questions[randomQue].answerChoices[randomAns].value) {
                        answerTD.attr("value", "true");
                        answerTD.attr("index", randomQue);
                        answerTD.attr("class", "answer answer-right");
                    } else {
                        answerTD.attr("class", "answer answer-wrong");
                    }

                    answerTR.append(answerTD);
                    $("tbody").append(answerTR);
                    questions[randomQue].answerChoices[randomAns].isUsed = true;
                }
            }
        }
    }
}

function startGame() {
    $(".start-area").hide();
    $(".status-area").show();
    $(".question-area").show();

    printQuestions();
    updateStatus();
}

$(document).ready(function () {
    startPage();

    $(document).on("click", ".start-button", function (event) {
        event.preventDefault();
        startGame();
    });

    $(document).on("click", ".answer", function (event) {

        if (!pickedAnswer) {
            $(this).addClass("answer-picked");
            pickedAnswer = true;

            if ($(this).attr("value") == "true") {
                answerRight();
            } else {
                answerWrong();
            }
        }
    });
    
    $(document).on("click", ".restart-button", function (event) {
        resetGame();
        printQuestions();
        updateStatus();
    });

});