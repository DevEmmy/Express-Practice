const getGoals = (req, res)=>{
    res.json({message: "Get Goals"})
}

const setGoals = (req, res)=>{
    res.json({message: "Set Goals"})
}

const deleteGoal = (req, res)=>{
    res.json({message: `Delete Goal of Id ${req.params.id}`})
}

const updateGoal = (req, res)=>{
    res.json({message: `Update Goal of Id ${req.params.id}`})
}


module.exports = {
    getGoals, setGoals, deleteGoal, updateGoal
}