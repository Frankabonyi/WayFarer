import Joi from 'joi';
import { join } from 'path';

const validationOptions = {
    allowUnknown: true, // allow unknown keys that will be ignored
    stripUnknown: true //remove unknown keys from the validated data
};

class CheckValidInput {

    /**
     * function to check if users input are valid or not 
     * @param {user} object
     */
 
    static createUser(user) {
        const schema = Joi.object().keys({
            email: Joi.strict().trim().strict().email().required()
                .error(() => 'Valid email field is required'),
             first_name: Joi.string().trim().strict().regex(/^[a-zA-Z]+$/).min(3)
                .required()
                .error(() => 'First name field is required with minimum length of 3 and must be'),
            last_name: Joi.string().trim().strict().regex(/^[a-zA-Z]+$/).min(3)
                .required()
                .error(() => 'Last name field is required with minimum length of 3 and must be'),
            password: Joi.string().trim().strict().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/)
                .required()
                .error(() => 'Password with a minimum of 6 letters, a number and a character')
            });
        return Joi.validate(user, schema, validationOptions);
    }

    /**
     * function to validate login inputs 
     * @param {details} string
     */

     static loginAUser(details) {
         const schema = Joi.object().keys({
            email: Joi.strict().trim().strict().email().required()
                .error(() => 'Email is required'),
            password: Joi.string().trim().strict().required()
                .error(() => 'You must provide a correct Password')
         });
         return Joi.validate(details, schema, validationOptions);
     }

     /**
     * function to check if trip input are valid
     * @param {trip} object
     */

     static createATrip(trip) {
         const schema = Joi.object().keys({
             bus_id: Joi.number().integer().required()
                .error(() => 'Bus id is required and should be a number'),
             origin: Joi.string().trim().required()
                .error(() => 'Origin is required '),
            destination: Joi.string().trim().required()
                .error(() => 'Destination is required and should not be less than 3 characters and must be lowercase'),
            trip_date: Joi.date().required()
                .error(() => 'trip date is required in format "11 May 2019"'),
            fare: Joi.number().required()
                .error(() => 'Fare is required and cannot be less than $1'),
         });
         return Joi.validate(trip, schema, validationOptions);
     }

     /**
     * function to add bus database for trips
     * @param {bus} object
     */

     static addBusForTrip(bus) {
         const schema = Joi.object().keys({
             number_plate: Joi.string().trim().strict().regex(/^[A-Za-z]{3}-[0-9]{3}-[A-Za-z]{2}$/)
                .required()
                .error(() => 'Number plate is required with Nig format xxx-xxx-xxx "LAG-278-RT"'),
            manufacturer: Joi.string().trim().strict().regex(/^[A-Za-z]+$/)
                .required()
                .error(() => 'Bus manufacturer is required'),
            year: Joi.string().trim().strict().regex(/^[0-9]+$/)
                .required()
                .error(() => 'Correct year format is required'),
            model: Joi.string().trim().strict().required()
                .error(() => 'Bus model is required'),
            });
        return Joi.validate(bus, schema, validationOptions);
     }

     
    /**
     * function to check for valide booking_id
     * @param {booking_id} object
     */

    static checkBookingParams(booking_id) {
        const schema = Joi.object().keys({
            booking_id: Joi.number().integer().required()
                .error(() => 'Params must be integer!'),
        });
        return Joi.validate(booking_id, schema, validationOptions);
    }

    /**
     * function to check for valide booking inputs
     * @param {trip_id} object
     */

     static checkBooking(trip_id) {
         const schema = Joi.object().keys({
             trip_id: Joi.number().integer().required()
                .error(() => 'Trip ID must be an integer number!'),
             seat_number: Joi.number().integer().required()
                .error(() => 'Seat number must be an integer number!')
         });
         return Joi.validate(trip_id, schema, validationOptions);
     }

     /**
     * function to check valid params string to
     * filter trip by users
     * @param {filterTrip} object
     */

     static checkTripParams(filterTrip) {
        const schema = Joi.object().key({
           destination: Joi.string().trim().strict().regex(/^[a-zA-Z]+$/)
                .error(() => 'Enter a valid lowercase string value'),
            origin: Joi.string().trim().strict().regex(/^[a-zA-Z]+$/)
                .error(() => 'Enter a valid lowercase string value'),
        });
        return Joi.validate(filterTrip, schema, validationOptions);
     }
}

export default CheckValidInput;