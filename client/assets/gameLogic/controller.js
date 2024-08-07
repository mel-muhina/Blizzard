const GameState = require("./logic.js");
const quizOptions = document.querySelectorAll("#table .option ");
const questionDescription = document.querySelector(".question-description");
const answersContainer = document.querySelector(".answers");

const game = new GameState();

game.init();

answersContainer.addEventListener("click", async function (e) {
  const target = e.target.closest(".option");

  if (!target) return;
  const result = await game.checkForAnswers(parseInt(target.dataset.answerId));
  await game.sendSubmission(result);
  const nextQuestion = await game.fetchNextQuestion();
  if (nextQuestion === -1) {
    // finish game
  } else {
    updateQuestion();
  }
});

const updateQuestion = () => {
  const question = game.question;
  questionDescription.textContent = question.question_description;
  question.answers.forEach((answer, i) => {
    const thElement = quizOptions[i].querySelector(".option-descrition");
    thElement.innerHTML = answer.answers;
    quizOptions[i].dataset.answerId = answer.answer_id;
  });
};

async function checkAuth() {
  if (localStorage.getItem("token")) {
  } else {
    window.location.assign("./login.html");
  }
}

(async function () {
  await checkAuth();
  await game.init();
  updateQuestion();
})();
