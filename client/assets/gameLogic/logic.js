class gameState {
  constructor({ user_highscore, question, character, lives, event }) {
    this.user_highscore = user_highscore;
    this.question = question;
    this.character = character;
    this.lives = lives;
    this.event = event;
    this.eventIndex = 0;
  }

  //   static async fetchForUser() {
  //     try {
  //       const response = await fetch(
  //         `https://blizzard-5jur.onrender.com/characters/1`
  //       );

  //       if (response.ok) {
  //         const data = await response.json();
  //         console.log("check data", data);
  //         data.forEach((character) => addEntry(entry)); // Map over all entries
  //       } else {
  //         throw new Error("Error: " + response.status);
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }

  async fetchForCharacter(id) {
    try {
      const response = await fetch(
        `https://blizzard-5jur.onrender.com/characters/${id}`
      );

      if (response.ok) {
        const data = await response.json();
        this.character = data;
      } else {
        throw new Error("Error: " + response.status);
      }
    } catch (err) {
      console.error(err);
    }
  }

  //   static async fetchForEvents() {
  //     try {
  //       const response = await fetch(
  //         `https://blizzard-5jur.onrender.com/characters/${id}`
  //       );

  //       if (response.ok) {
  //         const data = await response.json();
  //         this.character = data;
  //         // console.log("check character", this.character);
  //       } else {
  //         throw new Error("Error: " + response.status);
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }

  async fetchForQuestions(id) {
    try {
      const response = await fetch(
        `https://blizzard-5jur.onrender.com/questions/${id}`
      );

      if (response.ok) {
        const data = await response.json();
        this.question = data;
      } else {
        throw new Error("Error: " + response.status);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async checkForAnswers(id) {
    if (this.question.answer_id === id) {
      this.eventIndex += 1;
    } else {
      this.lives -= 1;
    }
  }

  async init() {
    fetchForCharacter(1);
    fetchForEvents(this.character.character_id);
    fetchForQuestions(this.events[this.eventIndex].event_id);
  }
}

// const test = new gameState({
//   user_highscore: 0,
//   question: {},
//   event: {},
//   lives: 3,
//   character: {},
//   eventIndex: 1,
// });

// test.fetchForQuestions(1);
// test.fetchForCharacter(1);
// test.checkForAnswers(1);

module.exports = gameState;
