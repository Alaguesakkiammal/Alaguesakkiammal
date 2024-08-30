const express =require('express')
const path=require('path')
const app=express()
const PORT = process.env.PORT || 3500;

app.get('/index.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})//Directly 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));