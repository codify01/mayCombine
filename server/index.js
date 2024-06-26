const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRoute = require('./routes/user.route')
require('dotenv').config()
const cors = require('cors')

const port = process.env.PORT
const URI = process.env.URI
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors('*'))

app.use('/user', userRoute)






app.listen(port, ()=>{
    mongoose.connect(URI)
    .then(()=>{
        console.log('connected');
    })
    .catch((err)=>{
        console.log('Not connected');
        console.log(err);
    })
})