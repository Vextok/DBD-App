# CREATE DATABASE dbd_killers;

use dbd_killers;
/*
CREATE TABLE killers(
killer_id INT PRIMARY KEY AUTO_INCREMENT,
killer_name VARCHAR(255) UNIQUE,
killer_keyword VARCHAR(255) NOT NULL,
killer_keyword2 VARCHAR(255) DEFAULT NULL
);

CREATE TABLE killer_perks(
perk_id INT PRIMARY KEY AUTO_INCREMENT,
perk_name VARCHAR(255)
);*/

-- SELECT * FROM killers;
-- SELECT * FROM killer_perks;

-- ALTER TABLE killers ADD COLUMN image_url VARCHAR(255);
/*
 UPDATE killers
 SET image_url = 'killer_images/ghoul.jpg' 
 WHERE killer_name = 'The Ghoul';*/
 
 -- The below 2 lines of code remove an invisible character, \r, from the 
 -- lines of text, that apparently windows can put in text files.
 -- Leaving a note here incase it becomes issue with survivors.
 
-- UPDATE killer_perks
-- SET perk_name = REPLACE(perk_name, CHAR(13), '');
 
 -- ALTER TABLE killer_perks ADD COLUMN perk_image VARCHAR(255);
 -- SET SQL_SAFE_UPDATES = 0;

-- If a perk name/image name has an apostrophe in it, put two 
-- apostrophes because it is a closing character in SQL for text.
-- Putting two next to each other counts as one for the sake of 
-- the character in text. 
-- ALSO NOTE DID NOT DO KANEKI PERKS, NO GOOD PICTURES
-- UPDATE killer_perks
-- SET perk_image = 'killer_perk_images/none_are_free.jpg'
-- WHERE perk_name = 'None Are Free';
-- UPDATE killers SET killer_keyword2 = "Power-Based"
-- WHERE killer_name = "The Nurse";

/*
CREATE TABLE survivors(
 survivor_id int PRIMARY KEY AUTO_INCREMENT,
 survivor_name VARCHAR(255) UNIQUE, 
 survivor_image VARCHAR(255)
);*/
/*
CREATE TABLE survivor_perks(
perk_id INT PRIMARY KEY AUTO_INCREMENT,
perk_name VARCHAR(255),
perk_image VARCHAR(255)
);*/
/*
UPDATE killer_perks
SET perk_image = 'killer_perk_images/friends_till_the_end.jpg'
WHERE perk_name = 'Friends ''till the end';

SELECT * FROM killer_perks;*/






