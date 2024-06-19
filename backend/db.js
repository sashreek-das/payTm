const mongoose = require('mongoose');

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
const User= new mongoose.model("User",userSchema)
module.exports={
    User
}