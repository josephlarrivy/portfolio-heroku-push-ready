
\echo 'Delete and recreate portfolioContactDB db?'
\prompt 'Return for yes or control C to cancel' yes

DROP DATABASE IF EXISTS portfolioContactDB;
CREATE DATABASE portfolioContactDB;
\connect portfolioContactDB

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  timeStamp varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  message text NOT NULL,
  key text PRIMARY KEY 
);
