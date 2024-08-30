const express=require('express')
const path=require('path')
const app= express()
const PORT = process.env.PORT || 3500;

app.get('/api/v1/account/read/167',(req,res) =>{
res.send("Happy");
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));