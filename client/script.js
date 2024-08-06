const Model = require("./logic.js");
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
  const question = Model.fetchForQuestion();
  questionDescription.textContent = gameState.question.questionDescription;
};
