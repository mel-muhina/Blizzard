const express = require("express");

const questionsRouter = require("./routes/questions");
const usersRouter = require("./routes/users");
const eventsRouter = require("./routes/events");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/questions", questionsRouter);
app.use("/events", eventsRouter);
app.use("/users", usersRouter);

module.exports = app;
