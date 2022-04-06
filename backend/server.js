const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const router = require('./routes/router')

const port = process.env.PORT || 5000

app.use('/api/goals', router)


app.listen(port, ()=>{
    console.log(`Server Now Running Port ${ port }`)
})