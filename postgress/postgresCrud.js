import pool from './db.js';

const createEmp = async (req, res) => {
    const { name, age, city } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO employees (name, age, city) VALUES ($1, $2, $3) RETURNING *',
            [name, age, city]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error creating employee:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }   
};
const deleteEmp = async (req, res) => {
    const { id } = req.params;
    const result = await pool.query(
        'DELETE FROM employees WHERE id = $1 RETURNING *',
        [id]
    );  
    console.log(result.rows[0]);
    
}

async function getEmps(req, res){
    await createEmp(4,'John Doe',30,'New York');
    pool.end();  
}