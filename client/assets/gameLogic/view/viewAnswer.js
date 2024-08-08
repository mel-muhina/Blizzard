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

  title.textContent = outcome ? "Correct answer" : "Wrong answer";
  title.classList.add(outcome ? "title-correct" : "title-wrong");

  lives.textContent = `Lives remaining: ${game.lives}`;
  answerDescription.textContent = game.question.answer_description;
}

module.exports = { openModal, closeModalEvent, updateAnswer };
