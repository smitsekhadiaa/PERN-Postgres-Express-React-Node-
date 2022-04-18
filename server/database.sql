CREATE DATABASE PERNtodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY;    --making todo_id as primary key
    description VARCHAR(500);
);