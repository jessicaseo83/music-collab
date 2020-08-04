DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  date_of_birth DATE NOT NULL,
  city VARCHAR(255) NOT NULL,
  postal_code VARCHAR(7) NOT NULL,
  role VARCHAR(255) NOT NULL,
  profile_pic VARCHAR(255) DEFAULT NULL
)