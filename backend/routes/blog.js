const router = require('express').Router
const Blog =  require('../models/blog.model');

router.get('/', (req,res)=>{
    // Blog.find()
    // .then((blogs)=>res.json(blog))
    // .catch(err=>res.status(400).json('Error while fetching'))
    console.log(33)
})

module.exports = router