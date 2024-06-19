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

const accoutnSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance:{
        type:number,
        required:true
    }
})
const User= new mongoose.model("User",userSchema)
const Account= new mongoose.model("Account",accoutnSchema)
module.exports={
    User,
    Account
};