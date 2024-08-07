
DROP TABLE IF EXISTS submission;
DROP TABLE IF EXISTS question;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS answers;
DROP TABLE IF EXISTS characters;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id INT GENERATED ALWAYS AS IDENTITY,
  username TEXT UNIQUE  NOT NULL,
  password TEXT NOT NULL,
  highscore INT,
  role VARCHAR(50),
  PRIMARY KEY(user_id)
);

CREATE TABLE characters (
  character_id INT GENERATED ALWAYS AS IDENTITY,
  character_name TEXT,
  birth_year INT,
  image_url VARCHAR(255),
  PRIMARY KEY(character_id)
);

CREATE TABLE events (
  event_id INT GENERATED ALWAYS AS IDENTITY,
  character_id INT,
  event_date DATE,
  event_description TEXT,
  bg_image_url VARCHAR(255),
  char_image_url VARCHAR(255),
  PRIMARY KEY(event_id),
  FOREIGN KEY (character_id) REFERENCES characters(character_id)
);

CREATE TABLE answers (
  answer_id INT GENERATED ALWAYS AS IDENTITY,
  answer_text VARCHAR(500) NOT NULL,
  question_id INT,
  PRIMARY KEY(answer_id)
);

CREATE TABLE question (
  question_id INT GENERATED ALWAYS AS IDENTITY,
  question_description TEXT,
  answer_id INT,
  event_id INT,
  score INT,
  answer_description  VARCHAR(500),
  PRIMARY KEY(question_id),
  FOREIGN KEY (answer_id) REFERENCES answers(answer_id),
  FOREIGN KEY (event_id) REFERENCES events(event_id)
);

CREATE TABLE submission (
  submission_id INT GENERATED ALWAYS AS IDENTITY,
  user_id INT,
  question_id INT,
  outcome BOOLEAN,
  PRIMARY KEY(submission_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (question_id) REFERENCES question(question_id)
);

INSERT INTO characters (character_name, birth_year, image_url) 
VALUES
('Julius Caesar', -100, 'https://simplycharly.com/wp-content/uploads/2022/07/caesar-scaled.jpeg');


INSERT INTO events (character_id, event_date, event_description, bg_image_url, char_image_url) 
VALUES 
(1, '0060-01-01', 'Testing the images', 'https://picfiles.alphacoders.com/596/596659.jpg', 'https://static.vecteezy.com/system/resources/previews/028/240/365/non_2x/anime-girls-cutting-sticker-transparent-background-ai-generative-free-png.png'),
(1, '0058-01-01', 'Caesar expands empire through military campaigns in Gaul.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Great_Fire_London.jpg/2560px-Great_Fire_London.jpg', 'https://static.wikia.nocookie.net/vsbattles/images/b/b8/ACO_Julius_Caesar_render.png');


INSERT INTO question (question_description, answer_id, event_id, score, answer_description)
VALUES 
('It is 60 BCE, Rome conflicts with itself, various leaders looking to seize control for themselves.
 Caesar comes up with a plan to form an alliance with another leader to boost his own power and control over the empire. 
 Some leaders Caesar considers are Pompey the Great and Crassus. It is your job to advise him on the best course of action:', 
 1, 1, 10, 'Julius Caesar formed a Triumvirate where he was able to garner both military support and wealth through both
  men thus allowing him more power, dominance, and influence over Rome, eventually securing the governorship over Gaul and 
  advancing his military career.'),
('It is 58 BCE, Caesar is now the governor of Gaul and is tasked with expanding the empire further; 
in doing so he must wage various military campaigns across regions of western and central Europe. 
Caesar knows that if he begins conquest, it will be long and painful especially with the many Germanic warlords and tribes, he must face, 
all boasting power and strength. It is your job to advise him on the best course of action:',
  2, 2, 10, 'Julius Caesar decided to wage war against the Germanic warlords as
   expanding territory would lead to more wealth and power for Caesar, helping him gain dominance. 
   The resources he gains would be vital in his plans to challenge his political opponents back in Rome.
    Caesar began by engaging the Helvetii tribe who were migrating through
     Roman territory, and this first move was his way of showing dominance over the region
      and securing the loyalty of his allies for the Gallic wars that lasted 8 years.'),
('It is 49 BCE, Caesar has gained much glory and power from the success of his conquests and your advisement. However, now begins a turning point in his life. Back in Rome, Caesar’s once ally turned rival Pompey has influenced the Senate to turn on him by ordering him to disband his army and retire in Rome as a mere citizen. He now faces a pivotal moment that can affect the future of the empire. It is your job to advise him on the best course of action:',
  3, 3, 10, 'They have all turned on you, only your soldiers are loyal to you. Caesar knew a day like this would come, and so he is ready for civil war and to take the fight to those who turned on him. By crossing the Rubicon with his army, it allowed him to leverage his military strength and also marked a point of no return against the largest power in the world.'),
('It is 48 BCE, Caesar travels to Egypt, the civil war has begun, and he hunts for Pompey. It is on his arrival that he realizes Egypt is also in turmoil with itself as Cleopatra VII is in a power struggle with her brother Ptolemy XIII. At some moment, Cleopatra appears in his presence undetected to ask for his help in securing her power over her brother. Caesar is presented with an incredible opportunity here that would allow him to expand his dominion and influence. It is your job to advise him on the best course of action:',
  4, 4, 10, 'You decide to go forward with her request and help her defeat Ptolemy by going to war against him as well. In doing so, parts of Egypt are ruined, including the great library of Alexandria. However, with the success of the war, Cleopatra becomes Pharaoh, and you begin your relationship with her, two of the strongest rulers in the Mediterranean and the world. She also has Caesar’s child and moves to Rome with him.'),
('It is 44 BCE, Caesar has now won the civil war and gained a lot of power, more than anyone else in the empire. For a while, Caesar has sought to reshape Rome and the Senate, which he deemed himself to be above. He has now become permanent dictator of Rome and has for a while been driving reforms, whether distributing land among veterans and poor or creating debt reliefs. Caesar must now decide on how he handles the Senate. This is crucial in keeping his power and stopping any threat to it. It is your job to advise him on the best course of action:',
  5, 5, 10, 'The role of the Senate is becoming meaningless to Caesar as he now holds more power than he ever did, especially as permanent dictator. He must slowly reduce its power and increase his hold on the entire republic of Rome strategically so as not to create any conflict. The best way to do this is using his power and influence to put loyalists in majority positions, as they will follow him and not question his authority.'),
('It is 44 BCE, During the civil war, Caesar faced many different enemies, including many members of the Roman Senate. He had the opportunity to punish many of them at different opportunities. However, he sees that a better path might be clemency and gaining the trust of his former enemies instead of punishing them for their betrayal against him for all he had achieved for Rome. In such an important moment, he now must decide the fate of former Senate members Brutus and Cassius. It is your job to advise him on the best course of action:',
  6, 6, 10, 'Your goal has been the reshaping of Rome itself, and for that, you need more support and allies than enemies. Making peace is the better solution, especially for the public to see a leader of unity and forgiveness as well as strength. Both men now are in your service and owe you their lives.');
  
 

INSERT INTO answers (answer_text, question_id) 
VALUES 
  ('Side with Pompey, that way he gains further military power through his help.', 1),
  ('Form an alliance with Crassus to gain further wealth and influence over the land, allowing him to garner further support later.', 1),
  ('Take the chance in forming an alliance with both men which could be risky.', 1),
  ('Begin waging war against the Germanic warlords to expand Rome’s power and dominance.', 2),
  ('Use your previous diplomacy skills to make treaties and alliances with the Germanic tribes that could benefit the empire.', 2),
  ('Forget the idea of conquest with the Germanic tribes and lands and turn eastwards instead where there is more to be gained for the empire.', 2),
  ('Obey the senate’s orders and return home, it’s been a long journey and many battles have been fought, it’s time to retire and rest in glory.', 3),
  ('You have always been a diplomatic man and only shown strength when needed, you might have some allies in Rome who could help, why not reach out.', 3),
  ('We must cross the Rubicon and prepare for war; there is no other option.', 3),
  ('Accept her request and assist her in securing her power over Egypt and see where this new alliance takes you.', 4),
  ('Give her to her brother; he is the one that currently holds power and would most likely be very grateful to you.', 4),
  ('You find out Ptolemy has killed Pompey; there is no point in remaining in Egypt when a civil war continues.', 4),
  ('Reduce the senate’s power and increase its membership with your loyalists.', 5),
  ('Completely shut it down and let your army take control over Rome under your rule.', 5),
  ('Allow for new members to be elected but reduce the number of senior positions.', 5),
  ('Exile them both and never allow them to return to Rome; this is an act of mercy.', 6),
  ('Pardon them and give them back their status as noble men.', 6),
  ('Execute them both and show the others your power so they may never turn against you.', 6);
  
  



