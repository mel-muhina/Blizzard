const GameState = require("./logic.js");
const winModal = require("./view/viewWin.js")
const gameoverModal = require("./view/viewLost.js")
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
  // Display answer modal
  //check game state -  if == running then fetchnextquestion, if == loss then show loss modal and if finished events then show win modal

  game.checkGameState()
  if (game.state === "running"){
    await game.fetchNextQuestion(); 
    updateQuestion();
  }
  else if (game.state === "lost"){
    gameoverModal.openModal();
    // trigger loss modal
  }
  else if (game.state === "win"){
    winModal.openModal();
    //trigger win modal
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
