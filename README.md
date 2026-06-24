# 🎓 Student Management System

##  Project Overview


The Student Management System is a full-stack web application developed using HTML, CSS, JavaScript, Node.js, Express.js, and MySQL. The application allows users to add student details and view all stored student records through a simple and interactive user interface.

---

##  Features

* Add new student records
* View all student records
* REST API integration
* MySQL database connectivity
* Responsive and user-friendly interface

---

##  Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MySQL

---

##  Project Structure

```text
StudentManagement/
│
├── index.html
├── server.js
├── package.json
└── README.md
```

---

##  Database Schema


### Database: studentdb

### Table: students

| Column     | Data Type                         |
| ---------- | --------------------------------- |
| id         | INT (Primary Key, Auto Increment) |
| name       | VARCHAR(100)                      |
| enrollment | VARCHAR(50)                       |
| email      | VARCHAR(100)                      |
| mobile     | VARCHAR(20)                       |
| branch     | VARCHAR(50)                       |

---

##  REST APIs

### Add Student

```http
POST /students
```

### Get All Students

```http
GET /students
```

---

##  How to Run the Project

### 1. Install Dependencies

```bash
npm install express mysql2 cors
```

### 2. Start Server

```bash
node server.js
```

### 3. Open Frontend

Open `index.html` using Live Server or any browser.

---

##  Output


* Student registration form
* Student records displayed in a table
* Data stored and retrieved from MySQL database

---

## Learning Outcomes

* Understanding REST APIs
* Database connectivity using MySQL
* Backend development using Node.js and Express.js
* Frontend and backend integration
* Full-stack web application development

---


## Author

**Sanidhya Choudhary**

B.Tech CSE
Shri Govindram Seksaria Institute of Technology and Science (SGSITS)

---


## Submission


Student Management System Project Submission
