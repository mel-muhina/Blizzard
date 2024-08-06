class gameState {
  constructor({ user_highscore, question, character, lives, event }) {
    this.user_highscore = user_highscore;
    this.question = question;
    this.character = character;
    this.lives = lives;
    this.event = event;
  }

  static async fetchForUser() {
    try {
      const response = await fetch(`https://blizzard-5jur.onrender.com`);

      if (response.ok) {
        console.log("check response", response);
        const data = await response.json();
        data.forEach((entry) => addEntry(entry)); // Map over all entries
      } else {
        throw new Error("Error: " + response.status);
      }
    } catch (err) {
      console.error(err);
    }
  }

  static async fetchForCharacter() {}

  static async fetchForEvents() {}

  static async fetchForQuestions() {}

  static async checkForAnswers() {}
}

const test = new gameState(fetchForUser);

module.exports = {
  test,
  gameState,
};
