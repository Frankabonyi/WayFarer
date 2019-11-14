const createBusQuery = `INSERT INTO 
        bus(number_plate, manfacturer, model, year, capacity, created_on)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING*`;

const getAllBusQuery = 'SELECT * FROM bus';

export {createBusQuery, getAllBusQuery};
        