const db = require("../database/connect");

class Submission {
  constructor(user_id, question_id, outcome) {
    this.user_id = user_id;
    this.question_id = question_id;
    this.outcome = outcome;
  }

  static async create({ question_id, user_id, outcome }) {
    const newSubmission = await db.query(
      "INSERT INTO submission (user_id, question_id , outcome) VALUES ($1, $2 , $3) RETURNING *",
      [question_id, user_id, outcome]
    );

    if (newSubmission.rows.length !== 1)
      throw new Error("Error creating new submission");

    return new Submission(newSubmission.rows[0]);
  }
<<<<<<< HEAD
=======

  static async getQuestionsStats() {
    const result = await db.query(
    `SELECT
      q.question_id,
      q.question_description,
      COALESCE(
        (SUM(CASE WHEN s.outcome = TRUE THEN 1 ELSE 0 END) * 100.0 / NULLIF(COUNT(s.submission_id), 0)),
        0
      ) AS percentage_correct
    FROM
      submission s
    JOIN
      question q ON s.question_id = q.question_id
    GROUP BY
      q.question_id, q.question_description`
  );

  return result.rows;
  }
>>>>>>> b663489262d48ae113c03868f239165a5b80f448
}

  module.exports = Submission;
