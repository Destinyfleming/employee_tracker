USE department_db;

INSERT INTO department (name)
VALUES ('sales');

INSERT INTO department (name)
VALUES ('engineering');

INSERT INTO role (title, salary, department_id)
VALUES ('sales executive', 50000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ('engineering executive', 80000, 2);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ('mike', 'johnson',1, 1, );

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ('amy', 'smith', 1, 1);
