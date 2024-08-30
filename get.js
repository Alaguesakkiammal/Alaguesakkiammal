const express=require('express')
const app=express()
const path=require('path')
const fs=require('fs').promises

const { Pool } = require('pg');

//json add
app.use(express.json());

// Create a new pool instance with your PostgreSQL connection details
const pool = new Pool({
  user: 'postgres',       // Correct property name
  host: 'localhost',      // Correct property name
  database: 'postgres',
  password: 'Alagu',
  port: 5432,
});
console.log("success");

app.get('/api/v1/demo/items/:limit/:offset',async(req,res)=>{  // query param dirsct given limit all things

    const limit=parseInt(req.query.limit)||10;  // pagination data dirct and default
    const offset=parseInt(req.query.offset)||0;

try{
    const query=`SELECT * FROM DEMO ORDER BY ID DESC LIMIT $1 OFFSET $2;`
    const values=[limit,-];

    //query run
    const result=await pool.query(query,values);
    res.status(200).send({message:'success',data:result.rows});
} catch (err) {
    console.error(err);
    res.status(500).send('some error has occured');
  }

});


//server connect
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
