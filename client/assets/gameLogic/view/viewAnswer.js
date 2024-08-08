const { Modal } = require("bootstrap")
const answerModal = document.querySelector("#answerModal")
const modal = new Modal(answerModal)

function openModal() {
    console.log("test 1 2 1 2")
modal.show()
}

function closeModalEvent(handler) {
    console.log(modal)
    console.log("707s")
    answerModal.addEventListener("hide.bs.modal", async () => 
    {
        await handler()
    })
}

function updateAnswer(game)
{
    console.log(game.question.answer_id)

    const answer_index = parseInt(game.question.answer_id);
    const answer_right = game.question.answers[{answer_index}];
    
    const answer_description = game.question.answer_description;

    const headerElement = answerModal.querySelector("h6")
    const answerElement = answerModal.querySelector("p")

     if(headerElement) {
         headerElement.textContent = answer_right
     }

    if(answerElement) {
        answerElement.textContent = answer_description
    }

}

module.exports = {openModal, closeModalEvent, updateAnswer}