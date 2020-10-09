DROP DATABASE IF EXISTS burger_db;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE burger_db;

use burger_db;

create table burger(
id INTEGER NOT NULL auto_increment,
name VARCHAR(255),
primary key (id)
)