const { Modal } = require("bootstrap")
const answerModal = document.querySelector("#answerModal")
const modal = new Modal(answerModal)

function openModal() {
    console.log("test 1 2 1 2")
modal.show()
}

module.exports = {openModal}