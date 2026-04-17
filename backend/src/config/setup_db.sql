CREATE DATABASE bolthouse_dev;
\c bolthouse_test
\i schema.sql
\i mock.sql


-- psql -U postgres -d postgres -f setup_db.sql