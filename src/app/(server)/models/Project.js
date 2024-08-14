const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    projectUrl: String,
    projectImagePath: { type: String }
},
{ timestamps: true });

// Check if the model already exists in mongoose.models
const Project = mongoose.models.Project || mongoose.model('Project', schema);

module.exports = Project;
