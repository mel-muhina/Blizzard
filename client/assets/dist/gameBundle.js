(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const GameState = require("./logic.js");
const quizOptions = document.querySelectorAll("#table .option");
const questionDescription = document.querySelector(".question-description");

console.log("quizOptions test", quizOptions[0]);

quizOptions[0].addEventListener("click", () => {
  console.log("This is option 1");
});

quizOptions[1].addEventListener("click", () => {
  console.log("This is option 2");
});

quizOptions[2].addEventListener("click", () => {
  console.log("This is option 3");
});
// https://blizzard-5jur.onrender.com/questions/1

const updateQuestion = () => {
  const question = GameState.fetchForQuestion();
  questionDescription.textContent = gameState.question.questionDescription;
  gameState.question.answers.forEach((answer, i) => {
    quizOptions[i].textContent = answer.answers;
    quizOptions[i].dataset.questionId = answer.answerId;
  });
};

},{"./logic.js":2}],2:[function(require,module,exports){





},{}]},{},[1]);
