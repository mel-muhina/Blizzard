
DROP TABLE IF EXISTS Submissions;
DROP TABLE IF EXISTS Questions;
DROP TABLE IF EXISTS Events;
DROP TABLE IF EXISTS Answers;
DROP TABLE IF EXISTS Characters;
DROP TABLE IF EXISTS User;



CREATE TABLE Answers (
  answer_id INT PRIMARY KEY,
  answers VARCHAR(50),
  question_id INT 
);

CREATE TABLE Submissions (
  user_id INT,
  question_id INT,
  outcome BOOLEAN,
  PRIMARY KEY (user_id, question_id),
  FOREIGN KEY (user_id) REFERENCES User(user_id),
  FOREIGN KEY (question_id) REFERENCES Questions(question_id)
);

CREATE TABLE Questions (
  question_id INT PRIMARY KEY,
  Question_description VARCHAR(200),
  answer_id INT,
  event_id INT,
  score INT,
  FOREIGN KEY (answer_id) REFERENCES Answers(answer_id),
  FOREIGN KEY (event_id) REFERENCES Events(events_id)
);

CREATE TABLE User (
  user_id INT PRIMARY KEY,
  username VARCHAR(50),
  password VARCHAR(10),
  highscore INT,
  role ENUM('admin', 'user', 'guest')
);

CREATE TABLE Events (
  events_id INT PRIMARY KEY,
  character_id INT,
  event_date DATE,
  event_description VARCHAR(300),
  FOREIGN KEY (character_id) REFERENCES Characters(character_id)
);

CREATE TABLE Characters (
  character_id INT PRIMARY KEY,
  character_name VARCHAR(50),
  birth_year INT
);
