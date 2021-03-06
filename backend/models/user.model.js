const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {username: { type : String, required: true, unique: true}},
    {timestamp: true}
)

const User = mongoose.model('User', userSchema);

module.exports = User