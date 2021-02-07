USE department_db

INSERT INTO departments (name)
VALUES ('sales');

INSERT INTO departments (name)
VALUES ('engineering');

INSERT INTO roles (title, salary, department_id)
VALUES ('sales executive', 50000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ('engineering executive', 80000, 2);

INSERT INTO employees (first_name, last_name, role_id)
VALUES ('mike', 'johnson', 1, );

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('amy', 'smith', 1, 1);
