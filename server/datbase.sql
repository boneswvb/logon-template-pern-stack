/* Users database */

CREATE DATABASE logon;

/* Users table */

CREATE TABLE users (
  u_id SERIAL PRIMARY KEY,
  names VARCHAR(255),
  surname VARCHAR(255),
  id_number bigint UNIQUE,
  pasword VARCHAR(16) NOT NULL
);

/*Insert 3 sets of data int the table for testing*/

INSERT INTO users (names, surname, id_number, pasword) 
VALUES ('Wilhelm Adriaan', 'von Benecke', 0123654789745, 'wim123');

INSERT INTO users (names, surname, id_number, pasword) 
VALUES ('Wilhelm Adriaan1', 'von Benecke1', 1123654789745, 'wim123');

INSERT INTO users (names, surname, id_number, pasword) 
VALUES ('Wilhelm Adriaan2', 'von Benecke2', 2123654789745, 'wim123');
