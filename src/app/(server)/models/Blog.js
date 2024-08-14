const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: { type: String, require: true, trim: true},
    content: { type: String, require: true, trim: true},
    author: { type: String, require: true, trim: true},
    blogImg:{type: String}
},
    { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model('Blog', schema);

module.exports = Blog;