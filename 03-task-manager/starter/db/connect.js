const mongoose = require('mongoose');

const connectDB = (url)=>{
    console.log('db')
    return mongoose
    .connect(url)
}

module.exports = connectDB