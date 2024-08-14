const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: { type: String, require: true, trim: true },
    email: { type: String, require: true, trim: true },
    message: { type: String, require: true, trim: true }
},
    { timestamps: true }
);

const Message = mongoose.model("message", schema);

module.exports = Message;