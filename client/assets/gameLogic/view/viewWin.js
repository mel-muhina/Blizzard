const { Modal } = require("bootstrap")
const winModal = document.querySelector("#winModal")
const modal = new Modal(winModal)

function openModal() {
    console.log("test 1 2 1 2")
modal.show()
}

module.exports = {openModal}