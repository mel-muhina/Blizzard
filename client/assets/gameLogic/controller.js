const GameState = require("./logic.js");
const quizOptions = document.querySelectorAll("#table .option");
const questionDescription = document.querySelector(".question-description");

console.log("quizOptions test", quizOptions[0]);

quizOptions[0].addEventListener("click", () => {
  console.log("This is option 1");
  test();
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
