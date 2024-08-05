const Submission = require("../models/Submission");

const show = async (req, res) => {
  try {
  } catch (err) {}
};

const create = async (req, res) => {
  try {
    const submissionData = req.body;
    const newSubmission = await Submission.create(submissionData);
    res.status(201).json({ newSubmission });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
