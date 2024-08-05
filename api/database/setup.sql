
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


INSERT INTO Characters (character_id, character_name, birth_year) 
VALUES (1, 'Julius Caesar', -100); 


INSERT INTO Events (events_id, character_id, event_date, event_description) 
VALUES (1, 1, '60 BCE', 'In 60 BCE, Rome conflicts with itself as various leaders seek control. Julius Caesar considers forming an alliance with Pompey the Great and Crassus to boost his power.');


INSERT INTO Questions (question_id, Question_description, answer_id, event_id, score) 
VALUES (1, 'It is 60 BCE, Rome conflicts with itself, various leaders looking to seize control for themselves. Caesar comes up with a plan to form an alliance with another leader to boost his own power and control over the empire. Some leaders Caesar considers are Pompey the Great and Crassus. It is your job to advise him on the best course of action: a) Side with Pompey, b) Form an alliance with Crassus, c) Take the chance and form an alliance with both men.', NULL, 1, 10);


INSERT INTO Answers (answer_id, answers, question_id) 
VALUES 
  (1, 'Side with Pompey, that way he gains further military power through his help.', 1),
  (2, 'Form an alliance with Crassus to gain further wealth and influence over the land, allowing him to garner further support later.', 1),
  (3, 'Take the chance in forming an alliance with both men which could be risky.', 1);


INSERT INTO Answers (answer_id, answers, question_id) 
VALUES (4, 'Julius Caesar formed a Triumvirate where he was able to garner both military support and wealth through both men thus allowing him more power, dominance, and influence over Rome, eventually securing the governorship over Gaul and advancing his military career.', 1);


INSERT INTO Submissions (user_id, question_id, outcome) 
VALUES (1, 1, TRUE); 