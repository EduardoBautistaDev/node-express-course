const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'))

app.all('*', (req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5001,()=>{
    console.log('serverlistening in 5001')
})