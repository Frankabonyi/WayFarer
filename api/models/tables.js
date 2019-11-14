/*eslint-disable no-console*/
const { Pool } = require ('pg');
const dotenv = require ('dotenv');

dotenv.config();

const pool = new Pool ({
    
    connectionString: process.env.DATABASE_URL

});

pool.on('connect', () => {
    console.log('connected to Database');
});


const createTable = () => {
    // User table
    const Users = `CREATE TABLE IF NOT EXISTS users (
        user_id SERIAL PRIMARY KEY,
        first_name VARCHAR (100) NOT NULL,
        last_name VARCHAR (100) NOT NULL,
        email VARCHAR (100) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        is_admin BOOLEAN DEFAULT FALSE,
        created_on DATE DEFAULT CURRENT_DATE,
        modified_on DATE NOT NULL
        )`;

    pool.query(Users)
        .then(res => {
            console.log(res);
            pool.end();
        })
        .catch(err => {
            console.log(err);
            pool.end();
        });
    
    //  Bus table
    const Bus = `CREATE TABLE IF NOT EXISTS bus(
        bus_id SERIAL PRIMARY KEY,
        number_plate VARCHAR (50) UNIQUE NOT NULL,
        manfacturer VARCHAR (50),
        model VARCHAR (50),
        year VARCHAR (50),
        capacity INTEGER NOT NULL,
        created_on DATE NOT NULL
         )`;
    pool.query(Bus)
        .then(res => {
            console.log(res);
            pool.end();
        })
        .catch(err => {
            console.log(err);
            pool.end();
        });
    const Trips = `CREATE TABLE IF NOT EXISTS trips (
        trip_id SERIAL PRIMARY KEY,
        bus_id INTEGER UNIQUE NOT NULL,
        created_on  TIMESTAMP DEFAULT Now(),
        origin VARCHAR(150) NOT NULL,
        destination VARCHAR(150) NOT NULL,
        trip_date DATE NOT NULL,
        fare FLOAT(4) NOT NULL,
        status VARCHAR(64) NOT NULL,
        modified_on DATE NOT NULL
    )`;
    pool.query(Trips)
    .then(res => {
        console.log(res);
        pool.end();
    })
    .catch(err => {
        console.log(err);
        pool.end();
    }); 


    const Bookings = `CREATE TABLE IF NOT EXISTS bookingS (
        booking_id SERIAL PRIMARY KEY,
        user_id INT NOT NULL,
        trip_id SERIAL PRIMARY KEY,
        created_on  TIMESTAMP DEFAULT Now(),
        bus_id SERIAL PRIMARY KEY,
        trip_date TIMESTAMP NOT NULL,
        seat_number INTEGER NOT NULL,
        first_name VARCHAR (100) NOT NULL,
        last_name VARCHAR (100) NOT NULL,
        email VARCHAR (100) UNIQUE NOT NULL
    )`;
    pool.query(Bookings)
    .then(res => {
        console.log(res);
        pool.end();
    })
    .catch(err => {
        console.log(err);
        pool.end();
    });
};

pool.on('remove', () => {
    console.log();
    process.exit(0);
});

module.exports = createTable;

require('make-runnable');