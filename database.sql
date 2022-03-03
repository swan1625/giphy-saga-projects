CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

CREATE TABLE "favorites" (
	"id" SERIAL PRIMARY KEY,
	"url" VARCHAR (1000) NOT NULL,
	"category_id" INT REFERENCES "category"
);

INSERT INTO "favorites" ("url") VALUES ('https://media4.giphy.com/media/uuvdeYTtQDuKZNp6LB/200_d.gif?cid=6b4c38aa2a9dc29f30e4895c1cb45cf703ee752271e532a6&rid=200_d.gif&ct=g'),
('https://media2.giphy.com/media/2aSqQG4tQnERyjNu0u/200_d.gif?cid=6b4c38aa46550b5f745eb8b93f411b5b735a3b4d9a336ef1&rid=200_d.gif&ct=g'),
('https://media2.giphy.com/media/EIk0393mqSdGI0zy8F/200_d.gif?cid=6b4c38aa135912fcbe603f1a2e5f34a08774ab027c526743&rid=200_d.gif&ct=g'),
('https://media4.giphy.com/media/hSEWoR7vfp5lITeZkB/200_d.gif?cid=6b4c38aacc2372a09c2c8a9a02bce6e1711cf296038ebfe0&rid=200_d.gif&ct=g');





-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');
