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

module.exports = {openModal, closeModalEvent}