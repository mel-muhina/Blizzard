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
