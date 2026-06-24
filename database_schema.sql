-- Create Database
CREATE DATABASE studentdb;

-- Use Database
USE studentdb;

-- Create Students Table
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    enrollment VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    mobile VARCHAR(20) NOT NULL,
    branch VARCHAR(50) NOT NULL
);

-- Sample Data
INSERT INTO students (name, enrollment, email, mobile, branch)
VALUES
('Sanidhya Choudhary', '0801CS241125', 'sanidhyac4@gmail.com', '7772862080', 'CSE'),
('Kisha Saluja', '0801CS241126', 'kisha67@gmail.com', '9131542020', 'CSE'),
('Keshvi Choudhary', '0801CS241129', 'keshvi587@gmail.com', '9131542089', 'CSE');

-- View Records
SELECT * FROM students;