const mongosse = require('mongoose');

const userSchema = new mongosse.Schema({
    name:{
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email:{
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password:{
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    api: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now,

    }

});

module.exports = mongosse.model('User',userSchema);