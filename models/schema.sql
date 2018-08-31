DROP DATABASE IF EXISTS dtbdTest;
CREATE DATABASE dtbdTest;

USE dtbdTest;
    CREATE TABLE vendors (
    vendorID INT AUTO_INCREMENT NOT NULL,
    vendorType VARCHAR(100) NOT NULL ,
    name VARCHAR(100) NOT NULL ,
    description VARCHAR(255),
    username VARCHAR(50) NOT NULL ,
    password VARCHAR(50) NOT NULL ,
    email VARCHAR(50) NOT NULL ,
    website VARCHAR(50) NOT NULL ,
    zip CHAR(5),
	PRIMARY KEY(vendorID)
);