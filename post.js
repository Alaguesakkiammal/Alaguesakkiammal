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

//post call
app.post('/api/v1/demo',async(req,res)=>
{
    const{title_name,phone_number,address,zip,city,state,created_at}=req.body;
    console.log(req.body);
  //manadory checking
  if(!title_name|| !phone_number ||!address || !city ||!state ||!zip){
     return res.status(400).send("manadory field missing..")
  }
  try{
     const query=`
     INSERT INTO DEMO(title_name,phone_number,address,zip,city,state,created_at)
     VALUES($1,$2,$3,$4,$5,$6,$7)
     RETURNING id;`
     ;
     const values=[title_name,phone_number,address,zip,city,state,created_at]

     const result=await pool.query(query,values);
     res.status(201).send({ message: 'success'});
    } catch (err) {
      console.error(err);
      res.status(500).send('some error has occured');
    }
  });

  //server connect
  const PORT = process.env.PORT || 3500;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
