const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
app.use([logger,authorize]);

app.get('/',(req,res)=>{

    res.send('home')
})

app.get('/about', (req,res)=>{
    res.send('about')
    
})

app.get('/api/products', (req,res)=>{
    res.send('products')
    
})

app.get('/api/items', (req,res)=>{
    console.log(req.user);
    res.send('products')
    
})
app.listen(5001,()=>console.log('lstening on 5001'))