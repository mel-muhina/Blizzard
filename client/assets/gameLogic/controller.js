const GameState = require("./logic.js");
const winModal = require("./view/viewWin.js");
const gameoverModal = require("./view/viewLost.js");
const checkAuth = require("./../utils/checkAuth.js");
const quizOptions = document.querySelectorAll("#table .option ");
const questionDescription = document.querySelector(".question-description");
const answersContainer = document.querySelector(".answers");
const bgContainer = document.querySelector("#bg-container");
const charContainer = document.querySelector("#char-img");

const game = new GameState();

answersContainer.addEventListener("click", async function (e) {
  const target = e.target.closest(".option");

  if (!target) return;
  const result = await game.checkForAnswers(parseInt(target.dataset.answerId));
  await game.sendSubmission(result);
  // Display answer modal
  //check game state -  if == running then fetchnextquestion, if == loss then show loss modal and if finished events then show win modal
  console.log(game);
});

const updateImgs = () => {
  const curEvent = game.event[game.eventIndex];
  const char_img = curEvent.char_image_url;
  const bg_img = curEvent.bg_image_url;

  bgContainer.style.backgroundImage = `url(${bg_img})`;
  charContainer.style.backgroundImage = `url(${char_img})`;
};

const updateQuestion = () => {
  const question = game.question;

  updateImgs();
  questionDescription.textContent = question.question_description;
  question.answers.forEach((answer, i) => {
    const thElement = quizOptions[i].querySelector(".option-descrition");
    console.log(answer);
    thElement.innerHTML = answer.answer_text;
    quizOptions[i].dataset.answerId = answer.answer_id;
  });
};

const readSeachParams = () => {
  // Get the current URL
  const url = window.location.href;

  // Create a URL object
  const urlObj = new URL(url);

  // Get the search parameters
  const searchParams = new URLSearchParams(urlObj.search);

  const characterId = searchParams.get("characterId");

  if (!characterId) {
    window.location.href = "characters.html";
  }

  return characterId;
};

(async function () {
  await checkAuth();
  const characterId = readSeachParams();
  await game.init(characterId);
  updateQuestion();
  updateImgs();
})();
