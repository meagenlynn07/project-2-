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
