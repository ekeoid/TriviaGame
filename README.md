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
> If the question is unanswered, this function is called by `countTimer()` which is on the `startTimer()` interval. When there is no choice, `printStatus()` is passed `none` where it let the user know the right answer (with display delays) and then get ready for the next question (if any) with `printQuestions()`.
>

##### `function answerRight()`
> This function is based on the `$(document).on("click", ".answer", function (event) {...}`. When an answer is selected, `pickedAnswer` boolean is toggled to prevent additional answers from being selected. When the correct answer is chosen based on the `value` attribute which is populated based on the `questions[x].answerChoices[y].value`, this function is called which updates that status board and colors the answers (right-green and wrong-red), and calls `printStatus()` with the `right` parameter.
>

##### `function answerWrong()`
> This function is based on the `$(document).on("click", ".answer", function (event) {...}`. When an answer is selected, `pickedAnswer` boolean is toggled to prevent additional answers from being selected. When the incorrect answer is chosen based on the `value` attribute which would be `undefined`, this function is called which updates that status board and colors the answers (right-green and wrong-red), and calls `printStatus()` with the `wrong` parameter.
>

##### `function colorAnswers()`
> This function looks at `questions[x].answerChoices[y].value` from the `printQuestions()` function to added classes `.answer-picked`, `.answer-right`, `.answer-wrong` to the question choices. Since these classes are available, jQuery can CSS style these rows to provide user visual indication.
>

##### `function updateStatus()`
> This function updates the HTML display status area for the remaining questions, number of questions answered right, and number of questions answered wrong.
>

##### `function startPage()`
> This function hides all display elements / containers except for the `.start-area` which includes a wallpaper and actor to start.
>

##### `function resetQuestionDisplay()`
> This function empties the the question display area to start a new round of questions. Not really needed here, since it is performed as part of printQustions().
>

##### `function preNumtoChar(number)`
> This is a simple function, to return the alphabetical letter associated with the numerical number.
>

##### `function printQuestions()`
> This function looks at the `questions[]` array to
>

##### `function startGame()`
> This function hides the `.start-area` and displays all the other elements of the game.
>

