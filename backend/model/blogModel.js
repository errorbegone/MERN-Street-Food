const mongoose = require('mongoose');

const { Schema } = mongoose; 
const blogSchema = new Schema({
    title:{type: String, required: true},
    description: {type: String, required :true},
    image: {type: String},
    user: {type: mongoose.Types.ObjectId, ref: "User",required: true}
})

exports.Blog = mongoose.model('Blog', blogSchema);