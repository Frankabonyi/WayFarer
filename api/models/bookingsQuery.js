const bookTripQuery = `INSERT INTO bookings (user_id, trip_id, created_on, bus_id, trip_date, seat_number, first_name, last_name, email )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING*`;

const getATripQuery = 'SELECT * FROM bookings WHERE trip_id = $1';

const getAllBookingsAdminQuery = 'SELECT * FROM bookings';

const getAllBookingsUserQuery = 'SELECT * FROM bookings WHERE email = $1';

const findAUserQuery = 'SELECT * FROM bookings WHERE user_id = $1';

const findABusQuery = 'SELECT * FROM bookings WHERE bus_id = $1';

const checkBookingsQuery = 'SELECT * FROM bookings WHERE (trip_id = $1 AND seat_number = $2)';

const checkIfBookingExistQuery ='SELECT * FROM bookings WHERE (trip_id = $1 AND user_id = $2)';

const updateBookingQuery = 'UPDATE bookings SET seat_number = $1 WHERE (email = $1 AND user_id = $3 AND booking_id = $4) RETURNING *';

const deleteBookingQuery = 'DELETE FROM bookings WHERE (booking_id = $1 AND user_id = $2) RETURNING*';

export {
    bookTripQuery,
    getATripQuery,
    getAllBookingsAdminQuery,
    getAllBookingsUserQuery,
    findAUserQuery,
    findABusQuery,
    checkBookingsQuery,
    checkIfBookingExistQuery,
    updateBookingQuery,
    deleteBookingQuery
};