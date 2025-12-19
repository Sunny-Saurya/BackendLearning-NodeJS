import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'empolyee',
    password:'San123',
    port:5432,
});
export default pool;