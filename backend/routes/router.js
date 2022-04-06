const express = require('express');
const router = express.Router()
const { getGoals, setGoals, deleteGoal, updateGoal} = require('../controllers/controller')

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').delete(deleteGoal).put(updateGoal)



module.exports = router