DROP DATABASE IF EXISTS department_db

CREATE DATABASE department_db

USE department_db

CREATE TABLE departments(
    id INT AUTO_INCRIMENT NOT NULL
    name VARCHAR(100) NOT NULL
    PRIMARY KEY(id)
);

CREATE TABLE roles(
    id INT AUTO_INCRIMENT NOT NULL
    title VARCHAR(100) NOT NULL
    salary DECIMAL NOT NULL
    department_id INT NOT NULL
    PRIMARY KEY(id)
);

CREATE TABLE employees(
    id INT AUTO_INCRIMENT NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT ,
    PRIMARY KEY(id),
);

SELECT * FROM employees WHERE role_id = 1

SELECT * FROM roles
INNER JOIN employees
ON roles.id = employees.role_id