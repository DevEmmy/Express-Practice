const router = require('express').Router()
const Blog =  require('../models/blog.model');

router.get('/', (req,res)=>{
    Blog.find()
    .then((blogs)=>res.json(blogs))
    .catch(err=>res.status(400).json('Error while fetching'))
})

module.exports = router