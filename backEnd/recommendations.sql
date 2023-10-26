
CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   name  VARCHAR(255) NOT NULL,
   email VARCHAR(255)
);

INSERT INTO users (name,email)
VALUES ('shadi','shadi.fakhri83@gmail.com');

INSERT INTO users (name,email)
VALUES ('afsha','afsha@gmail.com');

INSERT INTO users (name,email)
VALUES ('elena','elena@gmail.com');

INSERT INTO users (name,email)
VALUES ('junita','junita@gmail.com');

INSERT INTO users (name,email)
VALUES ('saliha','saliha@gmail.com');

INSERT INTO users (name,email)
VALUES ('daniel','daniel@gmail.com');

INSERT INTO users (name,email)
VALUES ('paulina','paulina@gmail.com');






CREATE TABLE medium (
   id SERIAL PRIMARY KEY,
   type VARCHAR(255) NOT NULL
);

INSERT INTO medium (type)
VALUES ('movie');

INSERT INTO medium (type)
VALUES ('music');

INSERT INTO medium (type)
VALUES ('book');







CREATE TABLE mood (
    id SERIAL PRIMARY KEY,
   type VARCHAR(255) NOT NULL
);

INSERT INTO mood (type)
VALUES ('scary');

INSERT INTO mood (type)
VALUES ('romantic');

INSERT INTO mood (type)
VALUES ('comedy');

INSERT INTO mood (type)
VALUES ('action');

INSERT INTO mood (type)
VALUES ('documentary');

INSERT INTO mood (type)
VALUES ('drama');

INSERT INTO mood (type)
VALUES ('science fiction');

INSERT INTO mood (type)
VALUES ('crime');

INSERT INTO mood (type)
VALUES ('pop');

INSERT INTO mood (type)
VALUES ('classic');

INSERT INTO mood (type)
VALUES ('light');

INSERT INTO mood (type)
VALUES ('energetic');





CREATE TABLE recommendationMood (
    id SERIAL PRIMARY KEY,
    recommendation_id INT,
    mood_id INT,
    FOREIGN KEY (recommendation_id) REFERENCES recommendations(id),
    FOREIGN KEY (mood_id) REFERENCES  mood(id)
)

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (1,2);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (2,9);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (3,10);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (4,11);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (4,2);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (5,12);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (6,2);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (6,6);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (7,4);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (7,1);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (8,6);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (9,5);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (9,2);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (10,8);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (11,3);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (12,7);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (13,1);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (13,8);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (14,1);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (15,2);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (16,3);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (17,4);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (17,8);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (18,5);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (18,2);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (19,6);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (20,7);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (20,1);

INSERT INTO recommendationMood (recommendation_id,mood_id)
VALUES (21,8);






CREATE TABLE recommendations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    medium_id INT,   
    user_id INT,  
    FOREIGN KEY (medium_id) REFERENCES medium(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO recommendations (name,medium_id,user_id)
VALUES ('titaic',2,1);

INSERT INTO recommendations (name,medium_id,user_id)
VALUES ('Despacito',2,2);

INSERT INTO recommendations (name,medium_id,user_id)
VALUES ('The train must fall',2,3);

INSERT INTO recommendations (name,medium_id,user_id)
VALUES ('O my way',2,4);

INSERT INTO recommendations (name,medium_id,user_id)
VALUES ('Flower',2,5);

INSERT INTO recommendations (name,medium_id,user_id)
VALUES ('Romeo and Joliet',3,6);

INSERT INTO recommendations (name,medium_id,user_id)
VALUES ('The call of the wild',3,7);

INSERT INTO recommendations (name,medium_id,user_id)
VALUES ('Hamlet',3,1);

INSERT INTO recommendations (name,medium_id,user_id)
VALUES ('Unspoken',3,2);

INSERT INTO recommendations (name,medium_id,user_id)
VALUES ('The other half',3,3);

INSERT INTO recommendations (name,medium_id,user_id)
VALUES ('Good omens',3,4);

INSERT INTO recommendations (name,medium_id,user_id)
VALUES ('Snow crash',3,5);

INSERT INTO recommendations (name,medium_id,user_id)
VALUES ('Scary science',3,6);

INSERT INTO recommendations (name,medium_id,user_id)
VALUES ('Dear David',1,7);

INSERT INTO recommendations (name,medium_id,user_id)
VALUES ('The vow',1,1);

INSERT INTO recommendations (name,medium_id,user_id)
VALUES ('Yes day',1,2);

INSERT INTO recommendations (name,medium_id,user_id)
VALUES ('Bullet train',1,3);

INSERT INTO recommendations (name,medium_id,user_id)
VALUES ('Take care of Maya',1,4);

INSERT INTO recommendations (name,medium_id,user_id)
VALUES ('Fair play',1,5);

INSERT INTO recommendations (name,medium_id,user_id)
VALUES ('Megan',1,6);

INSERT INTO recommendations (name,medium_id,user_id)
VALUES ('Equalizer',1,7);

