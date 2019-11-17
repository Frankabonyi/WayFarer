import bcrypt from 'bcrypt';

const Helper = {
    /**
     * hash password method
     * @param {string} password
     * @returns {string} returns hashed password
     */
    hashPassword(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    },

    /**
     * compare password
     * @param {string} hashPassword
     * @param {string} password
     * @returns {boolean} return true or false
     */

     comparePassword(hashPassword, password) {
         return bcrypt.compareSync(password, hashPassword);
     },
};

export default Helper;