const router = require('express').Router
const User =  require('../models/user.model');

router.route('/users').get((req,res)=>{
    User.find()
    .then((blogs)=>res.json(blog))
    .catch(err=>res.status(400).json('Error while fetching'))
})

module.exports = router