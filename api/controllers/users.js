const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const login = async (req, res) => {
  try {
    const data = req.body;

    const user = await User.findByUsername(data.username);

    const match = await bcrypt.compare(data.password, user.password);

    if (!match) throw new Error("Unable to authenticate");

    jwt.sign(
      { user_id: user.user_id },
      process.env.SECRET_TOKEN,
      {
        expiresIn: 3600,
      },
      (err, data) => {
        if (err) {
          res.status(500).json({ error: "Error generating token" });
        } else {
          res.status(200).json({ token: data });
        }
      }
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const signup = async (req, res) => {
  const data = req.body;
  try {
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS));

    data.password = await bcrypt.hash(data.password, salt);

    const newUser = await User.create(data);

    jwt.sign(
      { user_id: newUser.user_id },
      process.env.SECRET_TOKEN,
      {
        expiresIn: 3600,
      },
      (err, data) => {
        if (err) {
          res
            .status(500)
            .json({ success: false, error: "Error generating token" });
        } else {
          res.status(201).json({ token: data });
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.status(404).send({ error: err });
  }
};

module.exports = { login, signup };
