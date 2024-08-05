const express = require("express");
const cors = require("cors");

const questionsRouter = require("./routes/questions");
const usersRouter = require("./routes/users");
// const eventsRouter = require("./routes/events");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    name: "History game",
    description: "Learn by being an advisor to the great figures of history",
  });
});

app.use("/questions", questionsRouter);
// app.use("/events", eventsRouter);
app.use("/users", usersRouter);

module.exports = app;
