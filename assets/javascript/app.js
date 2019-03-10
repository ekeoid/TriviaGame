var questions = [
    {
        question: "What does an agoraphobiac fear?",
        answerChoices: [
            { answer: "Open spaces or crowds", value: true, isUsed: false },
            { answer: "Heights", value: false, isUsed: false },
            { answer: "Being alone", value: false, isUsed: false },
            { answer: "Spiders", value: false, isUsed: false }
        ],
        url: "https://darcsunshine.files.wordpress.com/2014/03/1379695033_agoraphobia.jpg",
        isAnswered: false,
    },
    {
        question: "What does an achluophobia fear?",
        answerChoices: [
            { answer: "Darkness", value: true, isUsed: false },
            { answer: "Flowers", value: false, isUsed: false },
            { answer: "Pain", value: false, isUsed: false },
            { answer: "Needles or pointed objects", value: false, isUsed: false }
        ],
        url: "https://darcsunshine.files.wordpress.com/2014/03/1379695033_agoraphobia.jpg",
        isAnswered: false,
    },
    {
        question: "What does an coulrophobia fear?",
        answerChoices: [
            { answer: "Clowns", value: true, isUsed: false },
            { answer: "Computers", value: false, isUsed: false },
            { answer: "Colors", value: false, isUsed: false },
            { answer: "Dogs", value: false, isUsed: false }
        ],
        url: "https://darcsunshine.files.wordpress.com/2014/03/1379695033_agoraphobia.jpg",
        isAnswered: false,
    }
];


var clockId;
var clockRunning = false;
var timer = 0;
var timeLimit = 5;
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

function printStatus(flag) {

    if (flag == "none") {
        var correctAns = $(".answer-right").text();
        $("table").empty();
        $("table").append("<p> Out of Time </p> The correct answer is " + correctAns);
    }

    if (flag == "right") {
        $("table").empty();
        $("table").append("<p> You are so SMART! </p>");
    }

    if (flag == "wrong") {
        var correctAns = $(".answer-right").text();
        $("table").empty();
        $("table").append("<p> You are Wrong... </p> The correct answer is " + correctAns);
    }

    if (flag == "done") {

    }
}

function answerNone() {
    countUnanswered++;
    updateStatus();
    stopTimer();

    setTimeout(function () { printStatus("none"); }, 1000);
    setTimeout(printQuestions, 4000);
}

function answerRight() {
    countRight++;
    colorAnswers();
    updateStatus();
    stopTimer();

    setTimeout(function () { printStatus("right"); }, 1000);

    if ((countRight + countWrong + countUnanswered) < questions.length) {
        setTimeout(printQuestions, 4000);
    }

}

function answerWrong() {
    countWrong++;
    colorAnswers();
    updateStatus();
    stopTimer();

    setTimeout(function () { printStatus("wrong"); }, 1000);

    if ((countRight + countWrong + countUnanswered) < questions.length) {
        setTimeout(printQuestions, 4000);
    }

}

function colorAnswers() {

    $(".answer-picked").css("font-weight", "bolder");
    $(".answer-wrong").addClass("table-danger");
    $(".answer-right").addClass("table-success");
}

function updateStatus() {
    $(".questions").text(questions.length - (countRight + countWrong + countUnanswered));
    $(".correct").text(countRight);
    $(".incorrect").text(countWrong);
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
});

function startPage() {
    $(".start-area").show();
    $(".status-area").hide();
    $(".question-area").hide();
    $(".restart-area").hide();
}

function resetQuestionDisplay() {
    $("table").empty();
    pickedAnswer = false;
    timeLimit = 5;
    startTimer();
}

function preNumtoChar(number) {
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[number-1];
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

function checkGameStatus() {
    var questionsCount = countRight + countWrong + countUnanswered;

}

function startGame() {
    $(".start-area").hide();
    $(".status-area").show();
    $(".question-area").show();

    printQuestions();
    updateStatus();
    checkGameStatus();

}
