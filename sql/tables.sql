drop database if exists reperio;
create database reperio;
use reperio;

create user_recipes (
  id varchar(36) primary key,
  author varchar(36) not null,
  ingredients varchar(512) not null,
  media varchar(512),
  instructions varchar(1024) not null,
  cost int not null,
  time int not null,
  difficulty int not null,
);
