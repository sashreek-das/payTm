const mongoose = require('mongoose');
const { number } = require('zod');

mongoose.connect("mongodb+srv://21051167:PvnK4ohJRc4zHJTd@cluster0.9x7llre.mongodb.net/")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    }
})

const accountSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance:{
        type:Number,
        required:true
    }
})
const User= new mongoose.model("User",userSchema)
const Account= new mongoose.model("Account",accountSchema)
module.exports={
    User,
    Account
};