CREATE DATABASE employee_tracker;
USE employee_tracker;
CREATE TABLE departments(
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
);
CREATE TABLE roles(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY(department_id) REFERENCES departments(id)
);
CREATE TABLE employees(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY(role_id) REFERENCES roles(id)
  );
INSERT INTO departments(name) VALUES('sales');