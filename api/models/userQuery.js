const createUserQuery = `INSERT INTO
    users(first_name, last_name, email, password, is_admin, created_on, modified_on)

    VALUES($1, $2, $3, $4, $5, $6, $7)

    RETURNING id,first_name, last_name, email, password, is_admin, created_on, modified_on`;


const loginUser = 'SELECT * FROM users WHERE email = $1';


export { createUserQuery, loginUser };

