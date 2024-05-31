const mongoose = require('mongoose')
require('dotenv').config()
const bcrypt = require("bcrypt")
const userSchema = mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true}
})

userSchema.pre("save", function(next){
    bcrypt.hash(this.password, 10)
    .then((hashed)=>{
        this.password = hashed
        next()
    }).catch((err)=>{
        console.log(err.message);
    })
})
const userModel = mongoose.model('user_collection', userSchema)


module.exports = userModel