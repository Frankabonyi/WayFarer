const createTripQuery = `INSERT INTO 
        trips (bus_id, created_on, origin, destination, trip_date, fare, status, modified_on)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING id, bus_id, origin, destinattion, trip_date, fare, status`;

const cancelAtripQuery = `UPDATE trips SET status = $1, modified_on = &2 WHERE id = &3 RETURNING *`;

const getAllTripQuery = 'SELECT * FROM trips';

const checkIfBusIsAvailableQuery = 'SELECT * FROM trips WHERE (trip_date = $1 AND bus_id = $2 AND status = $3)';

const filterTripQuery = 'SELECT * FROM trips WHERE (destination = $1 OR origin = $2)';

export {
        createTripQuery,
        cancelAtripQuery,
        getAllTripQuery,
        checkIfBusIsAvailableQuery,
        filterTripQuery
};