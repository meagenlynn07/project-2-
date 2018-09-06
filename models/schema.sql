<<<<<<< HEAD
-- DROP DATABASE IF EXISTS dtbdTest;
-- CREATE DATABASE dtbdTest;

USE DATABASE dtbdTest;
    CREATE TABLE vendors (
    vendorID INT AUTO_INCREMENT NOT NULL,
    vendorType VARCHAR NOT NULL ,
    name VARCHAR NOT NULL ,
    description VARCHAR,
    username VARCHAR NOT NULL ,
    password PASSWORD NOT NULL ,
    email VARCHAR NOT NULL ,
    website VARCHAR NOT NULL ,
    zip CHAR(5)
);
=======
DROP DATABASE IF EXISTS wedding_db;
CREATE DATABASE wedding_db;
>>>>>>> 8df9d048dc58f9be7a6ba1b46b73490ee322bbe0
