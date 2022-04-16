const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const router = require('./routes/router')
const mongoose = require('mongoose')
// const blogRouter = require('./routes/blog');
// const userRouter = require('./routes/user')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

const uri = process.env.DATABASE_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection
connection.once('open', ()=>{console.log('Database running Successfully')})


const port = process.env.PORT || 5000
app.use('/api/goals', router)

// app.use('/blogs', blogRouter)
// app.use('/users', userRouter)



app.listen(port, ()=>{
    console.log(`Server Now Running Port ${ port }`)
})