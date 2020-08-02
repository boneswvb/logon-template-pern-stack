/* Users database */

CREATE DATABASE logon;

/* Users table */

CREATE TABLE users
(
  u_id SERIAL PRIMARY KEY,
  fullname VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  passwordf VARCHAR(255) NOT NULL,
  passwordr VARCHAR(255) NOT NULL
);

/*Insert 3 sets of data int the table for testing*/

INSERT INTO users
  (fullname, email, passwordf, passwordr)
VALUES
  ('Wim von Benecke','email@email1.com', 'wim123', 'wim123');

INSERT INTO users
  (fullname, email, passwordf, passwordr)
VALUES
  ('Wim von Benecke','email@email2.com', 'wim1234', 'wim1234');

INSERT INTO users
  (fullname, email, passwordf, passwordr)
VALUES
  ('Wim von Benecke','email@email3.com', 'wim1235', 'wim1235');
