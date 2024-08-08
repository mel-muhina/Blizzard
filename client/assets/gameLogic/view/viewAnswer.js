const { Modal } = require("bootstrap");
const answerModal = document.querySelector("#answerModal");
const modal = new Modal(answerModal);

function openModal() {
  modal.show();
}

function closeModalEvent(handler) {
  answerModal.addEventListener("hide.bs.modal", async () => {
    await handler();
  });
}

function updateAnswer({ game, outcome }) {
  const title = answerModal.querySelector("#answerModal .modal-body h6");
  const lives = document.querySelector(".lives");
  const correctAnswerEl = document.querySelector(".correct_answer");
  const answerDescription = document.querySelector(".answer_description");
  const correctAnswerText = game.question.answers.find(
    (ans) => ans.answer_id === game.question.answer_id
  );

  console.log(correctAnswerText);
  title.textContent = outcome ? "Correct answer" : "Wrong answer";
  title.id = outcome ? "title_correct" : "title_wrong";

  lives.textContent = `Lives remaining: ${game.lives}`;
  correctAnswerEl.textContent = correctAnswerText.answer_text;
  answerDescription.textContent = game.question.answer_description;
}

module.exports = { openModal, closeModalEvent, updateAnswer };
