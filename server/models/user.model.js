const mongoose = require('mongoose')
const bycrypt = require("")

const userSchema = mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true}
})

userSchema.pre("save", (next)=>{
    bycrypt.hash(this.password, 10).then((hashed)=>{
        console.log(this);
        this.password = hashed
        console.log(hashed);
        next()
    }).catch((err)=>{
        console.log(err);
    })
})
const userModel = mongoose.model('user_collection', userSchema)


module.exports = userModel