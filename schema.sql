-- mysql -u root < schema.sql

DROP DATABASE IF EXISTS photosdb;

CREATE DATABASE photosdb;

USE photosdb;

CREATE TABLE photos (
  Id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  restaurant VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  timestamp DATE NOT NULL,
  unrelatedReport INT,
  inappropriateReport INT,
  dislike BOOLEAN
);

INSERT INTO photos (
    id, 
    restaurant,
    url,
    timestamp,
    unrelatedReport,
    inappropriateReport,
    dislike
) VALUES (
    1,
    "kinjo",
    "https://resizer.otstatic.com/v2/photos/large/24947294.jpg",
    "2017-03-31",
    1,
    1,
    false
);