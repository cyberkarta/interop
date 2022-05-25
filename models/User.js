const mongoose = require('mongoose')
let userSchema = mongoose.Schema({
    email : {
        type: String,
        require: true
    },
    password : {
        type: String,
        require: true
    },
}, { timestamps: true })
module.exports = mongoose.model('User', userSchema)