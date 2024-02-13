
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const errorHandlerMiddleware= require('./middleware/error-handler')
require('dotenv').config()

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', tasks)
app.use(errorHandlerMiddleware)

const port = process.env.PORT  || 3000;

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`listening on ${port}`)
        })
    }catch(error){
        console.log(error)
    }
}

start();