create database fase2;

use fase2;

create table games(
   id INT NOT NULL AUTO_INCREMENT,
   game_id INT NOT NULL,
   players INT NOT NULL,
   game_name VARCHAR(100) NOT NULL,
   winner INT NOT NULL,
   queue VARCHAR(100) NOT NULL,
   PRIMARY KEY ( id )
);

CREATE USER 'grupo6'@'%' IDENTIFIED BY 'grupo6123';
GRANT ALL PRIVILEGES ON fase2.* TO 'grupo6';