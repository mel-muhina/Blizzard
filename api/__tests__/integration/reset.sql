
TRUNCATE TABLE submission;
TRUNCATE TABLE question;
TRUNCATE TABLE events;
TRUNCATE TABLE answers;
TRUNCATE TABLE characters;
TRUNCATE TABLE users;


INSERT INTO characters (character_name, birth_year, image_url) 
VALUES
('Julius Caesar', '100 BC', 'url1'),
('Cleopatra', '69 BC', 'url2'),
('Alexander the great', '356 BC', 'url3');


INSERT INTO events (character_id, event_date, bg_image_url, char_image_url) 
VALUES 
(1, '60 BCE', ''),
(1, '58 BCE', ''),
(1, '49BCE', ''),
(2, '48BCE', ''),
(2, '44BCE', ''),
(2, '44BCE', '');


INSERT INTO answers (answer_text, question_id) 
VALUES 
  ('Answer 1 to question 1', 1),
  ('Answer 2 to question 1', 1),
  ('Answer 3 to question 1', 1),
  ('Answer 1 to question 2', 2),
  ('Answer 2 to question 2', 2),
  ('Answer 3 to question 2', 2),
  ('Answer 1 to question 3', 3),
  ('Answer 2 to question 3', 3),
  ('Answer 3 to question 3', 3),
  ('Answer 1 to question 4', 4),
  ('Answer 2 to question 4', 4),
  ('Answer 3 to question 4', 4),
 
  
INSERT INTO question (question_description, answer_id, event_id, score, answer_description)
VALUES 
(1,1,1,10,"Question description event id 1")
(1,1,2,10,"Question description event id 2")
(1,1,3,10,"Question description event id 3")