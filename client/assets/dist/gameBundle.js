(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const GameState = require("./logic.js");
const quizOptions = document.querySelectorAll("#table .option ");
const questionDescription = document.querySelector(".question-description");
const answersContainer = document.querySelector(".answers");

const game = new GameState({
  user_highscore: 0,
  question: {
    question_id: 1,
    question_description:
      "It is 60 BCE, Rome conflicts with itself, various leaders looking to seize control for themselves. Caesar comes up with a plan to form an alliance with another leader to boost his own power and control over the empire. Some leaders Caesar considers are Pompey the Great and Crassus. It is your job to advise him on the best course of action: a) Side with Pompey, b) Form an alliance with Crassus, c) Take the chance and form an alliance with both men.",
    answer_id: 1,
    event_id: 1,
    score: 10,
    answers: [
      {
        answer_id: 1,
        answers:
          "Side with Pompey, that way he gains further military power through his help.",
      },
      {
        answer_id: 2,
        answers:
          "Form an alliance with Crassus to gain further wealth and influence over the land, allowing him to garner further support later.",
      },
      {
        answer_id: 3,
        answers:
          "Take the chance in forming an alliance with both men which could be risky.",
      },
    ],
  },
  event: {},
  lives: 3,
  character: {},
});
console.log(game);

// game.init();

answersContainer.addEventListener("click", function (e) {
  const target = e.target.closest(".option");

  if (!target) return;
  game.checkForAnswers(parseInt(target.dataset.answerId));
});

const testQuestion = {
  question_id: 1,
  question_description:
    "It is 60 BCE, Rome conflicts with itself, various leaders looking to seize control for themselves. Caesar comes up with a plan to form an alliance with another leader to boost his own power and control over the empire. Some leaders Caesar considers are Pompey the Great and Crassus. It is your job to advise him on the best course of action: a) Side with Pompey, b) Form an alliance with Crassus, c) Take the chance and form an alliance with both men.",
  answer_id: 1,
  event_id: 1,
  score: 10,
  answers: [
    {
      answer_id: 1,
      answers:
        "Side with Pompey, that way he gains further military power through his help.",
    },
    {
      answer_id: 2,
      answers:
        "Form an alliance with Crassus to gain further wealth and influence over the land, allowing him to garner further support later.",
    },
    {
      answer_id: 3,
      answers:
        "Take the chance in forming an alliance with both men which could be risky.",
    },
  ],
};

const updateQuestion = () => {
  const question = testQuestion;
  questionDescription.textContent = question.question_description;
  question.answers.forEach((answer, i) => {
    const thElement = quizOptions[i].querySelector(".option-descrition");
    thElement.innerHTML = answer.answers;
    quizOptions[i].dataset.answerId = answer.answer_id;
  });
};

updateQuestion();

},{"./logic.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
