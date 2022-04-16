const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema(
    {
        title : {type: String, required: true},
        content : {type: String, required: true},
        date : { type: String, required: true},
        likes : { type: Number, required: false, default:0},
    },
    {
        timestamps: true
    }
)

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog