const db = require("../database/connect");

class Submission {
  constructor(user_id, question_id, outcome) {
    this.user_id = user_id;
    this.question_id = question_id;
    this.outcome = outcome;
  }

  static async create({ question_id, user_id, outcome }) {
    const newSubmission = await db.query(
      "INSERT INTO submissions (user_id, question_id , outcome) VALUES ($1, $2 , $3) RETURNING *",
      [question_id, user_id, outcome]
    );

    if (newSubmission.rows.length !== 1)
      throw new Error("Error creating new submission");

    return new Submission(newSubmission.rows[0]);
  }

  static async getQuestionsStats() {}
}

module.exports = Submission;
