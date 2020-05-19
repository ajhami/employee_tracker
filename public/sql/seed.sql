--------------
-- seed.sql --
--------------

USE employee_tracker;

-- Employee entries ==
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Dwight", "Shrute", 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jim", "Halpert", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Lonny", "Collins", 4, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Madge", "Madsen", 5, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Michael", "Scott", 1, 1);

-- Department entries --
INSERT INTO department (department_name) VALUES ("Scranton Paper Sales");
INSERT INTO department (department_name) VALUES ("Scranton Warehouse");

-- Role entries --
INSERT INTO role (title, salary, department_id) VALUES ("Sales Regional Manager", 100000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Lead Sales Associate", 70000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Assistant to the Regional Manager", 70000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Warehouse Manager", 25000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Dock Worker", 15000, 2);


