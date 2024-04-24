const sql = require("mssql");

const config = {
    user: 'admin',
    password: 'admin',
    server: 'localhost',
    port: 1433,
    database: 'store',
    option: {
        encrypt: true,
        trustServerCertificate: true
    
    }
};
export async function connectDatabase() {
    try {
        await sql.connect(config);
        console.log('Connected to SQL Server');
    } catch (error) {
        console.error('Error:', error.message);
    }
}


async function selectAllUser() {
    try {
        const result = await sql.query`SELECT * FROM users`;
        console.log(result.recordset);

        return result.recordset;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function login(email, password) {
    try {
        const result = await sql.query`SELECT * FROM users WHERE email = ${email} AND password = ${password}`;
        console.log(result.recordset);

        if (result.recordset.length > 0) {
            console.log('Login successful');
            return true;
        } else {
            console.log('Invalid email or password');
            return false;
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function register(email, password, fullname, role) {
    try {
        const result = await sql.query`INSERT INTO users (email, password, fullname, role) VALUES (${email}, ${password}, ${fullname}, ${role})`;
        console.log('User registered successfully');
        return true;
    } catch (error) {
        console.error('Error:', error.message);
        return false;
    }
}

module.exports = { connectDatabase };