const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://exb406:KHjcZPnXezy51kcj@nodeexpressprojects.qlno6v1.mongodb.net/?retryWrites=true&w=majority';

mongoose
.connect(connectionString)
.then(()=>console.log('connected to the db...'))
.catch((err)=>console.log(err))