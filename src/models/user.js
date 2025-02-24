const mongoose = require("mongoose");

const schema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 16,
    }
})

const User = mongoose.model("User", schema);

module.exports = User;