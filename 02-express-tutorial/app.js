const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.json([{name:'john'}, {name:'susan'}])
})

app.listen(5001,()=>{
    console.log('listening in port 5001')
})