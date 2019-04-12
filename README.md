# TriviaGame

### Overview

This game is a Trivia question game for homework assignment #5. The assignment is bases on JavaScript (JS) timers. The objective of the game is to answer the question by clicking on the associated answer. The theme of these questions revolve around Justin Bieber.

If you can't remember who he was, maybe your heard of https://www.youtube.com/watch?v=kffacxfA7G4

You can find the instructions for this assignment here: [homework-instructions.md][]

The rest of this README will overview the interpretation of the game through the JS functions .

[homework-instructions.md]: https://github.com/ekeoid/TriviaGame/blob/master/homework-instructions.md

### File Structure

```
├── assets
|  ├── css
|  |  └── reset.css
|  |  └── style.css
|  ├── images
|  |  └── [Background Images]
|  └── javascript
|     └── app.js
|     └── biebz.js
└── index.html
```

### Approach

- Game will read list of questions.
- Game will output question from list in random order.
- Game will output answers for each question in random order.


#### JavaScript - `biebz.js`
The questions are linked in an external file as an array of objects in variable `questions[]`. The object structure is:
```
  {
    question: "",
    answerChoices: [
      { answer: "", value: true,  isUsed: false },
      { answer: "", value: false, isUsed: false },
      { answer: "", value: false, isUsed: false },
      { answer: "", value: false, isUsed: false }
    ],
    info: "",
    isAnswered: false,
  }
```

- `question` is the question that different answer choices.
- `answerChoices` is an array of possible answers, with parameter for the correct answer, and tracking of the output display of answer.
- `info` is extra information about that supports the explanation of the correct answer.
- `isAnswered` is a variable to track whether the question was used already of all total questions for randomization.
- `answerChoices[x].answer` is the choice answer for user to select.
- `answerChoices[x].value` is a boolean to identify the correct answer between all the other answer choices.
- `answerChoices[x].isUsed` is a boolean to track whether the answer choice was used already of the other choices for randomization.


#### JavaScript - `game.js`

##### `function resetGame()`
> All variables are set to the initial state. The `HTML` restart area is hidden and questions area is displayed. For the `questions[]` object array, all `questions[x].answerChoices[y].isUsed` and `questions[x].isAnswered` are returned to `false`.
>

##### `function startTimer()`
> Starts an interval timer for the questions. The ID of the timer is tracked and an associated Boolean variable is used to determine if the timer is active or not.
>

##### `function stopTimer()`
> Stops the interval timer, when the question is answered or timed out.
>

##### `function countTimer()`
> This function that is called by the start timer. It decreases the time value tracking the seconds and also is a status check on the conditionals of the timer, such as reaching zero of if no answer is selected.
>

##### `function printBSCard()`
> This function appends a Bootstrap card model to the questions table. This is the framework to hold the questions and answers for the game.
>

##### `function printStatus(flag)`
> This function updates the score status board and messages on the question area, depending on whether the answer is right, wrong, unanswered, or there are no more questions left.
>

##### `function answerNone()`
##### `function answerRight()`
##### `function answerWrong()`
##### `function colorAnswers()`
##### `function updateStatus()`
##### `function startPage()`
##### `function resetQuestionDisplay()`
##### `function preNumtoChar(number)`
##### `function printQuestions()`
##### `function startGame()`


```
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


$(document).ready(function ()
    startPage();
    $(document).on("click", ".start-button", function (event)
    $(document).on("click", ".answer", function (event)
    $(document).on("click", ".restart-button", function (event)
```

