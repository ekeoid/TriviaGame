var questions = [
    {
        question: "What does an agoraphobiac fear?",
        answerChoices: [
            { answer: "Open spaces", value: true },
            { answer: "Heights", value: false },
            { answer: "Being alone", value: false },
            { answer: "Spiders", value: false }
        ],
        url: "https://darcsunshine.files.wordpress.com/2014/03/1379695033_agoraphobia.jpg",
        isAnswered: false,
    }
];


var clockId;
var clockRunning = false;
var timer = 0;
var timeLimit = 10;
var countRight = 0;
var countWrong = 0;
var countUnanswered = 0;
var pickedAnswer = false;

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
        answerNone();
    } else {
        timeLimit--;
    }
    $(".timer").text(timeLimit);
}

function answerNone() {
    countUnanswered++;
    updateStatus();
    stopTimer();
    setTimeout(printQuestions, 2000);

}

function answerRight() {
    countRight++;
    colorAnswers();
    updateStatus();
    stopTimer();
    setTimeout(printQuestions, 2000);
    
}

function answerWrong() {
    countWrong++;
    colorAnswers();
    updateStatus();
    stopTimer();
    setTimeout(printQuestions, 2000);
    
}

function colorAnswers() {

    $(".answer-picked").css("font-weight", "bolder");
    $(".answer-wrong").addClass("table-danger");
    $(".answer-right").addClass("table-success");
}

function updateStatus() {
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
    // $(".answer-area").hide();
    $(".restart-area").hide();
}

function printQuestions() {
    $("th").empty();
    $("tbody").empty();
    pickedAnswer = false;
    timeLimit = 10;
    startTimer();

    if (!questions[0].isAnswered) {
        // var questionDiv = $("<tr>").text(questions[0].question);
        // questionDiv.attr("class", "col-md-7 mx-auto");
        $("th").text(questions[0].question);

        // Randomize answer order
        // Math.floor(Math.random * questions[0].answerChoices.length)
        for (var i = 0; i < questions[0].answerChoices.length; i++) {
            var answerTR = $("<tr>");
            var answerTD = $("<td>").text(questions[0].answerChoices[i].answer);
            
            if (questions[0].answerChoices[i].value == true) {
                answerTD.attr("value", "true");
                answerTD.attr("class", "answer answer-right");
            } else {
                answerTD.attr("class", "answer answer-wrong");
            }
            answerTR.append(answerTD);
            //answerDiv.attr("class", "col-md-7 mx-auto");
            $("tbody").append(answerTR);
        }
    }
}

function startGame() {
    $(".start-area").hide();
    $(".status-area").show();
    $(".question-area").show();
    // $(".answer-area").show();

    printQuestions();
    



    //$('.timer').html('<p>Time remaining: <span class="time">30</span></p>');

    // $('.question').html(questions[counter].question);
    // var showingAnswers =
    //   '<p class="answer first-answer">' +
    //   questions[counter].answers[0].answer +
    //   '</p><p class="answer">' +
    //   questions[counter].answers[1].answer +
    //   '</p><p class="answer">' +
    //   questions[counter].answers[2].answer +
    //   '</p><p class="answer">' +
    //   questions[counter].answers[3].answer +
    //   '</p>';

    // $('.answers').html(showingAnswers);

    // timerHolder();
}
