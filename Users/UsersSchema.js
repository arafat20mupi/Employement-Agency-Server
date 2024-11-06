const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: ["user", "admin",],
        default: "user",
    },
    photo: {
        type: String,
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('users', UserSchema)