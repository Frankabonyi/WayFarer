import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

class Db {
        
        /**
         * Db query
         *
         * @param {string} queryString
         * @param {*} params
         */

    static async query (queryString, params) {
        return new Promise((resolve, reject) => {
            pool.query(queryString, params)
                .then((res) => {
                    resolve(res);
                }).catch((error) => {
                    reject(error);
                });
        });
    };

};

export default Db;