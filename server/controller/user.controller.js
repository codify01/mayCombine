const userModel = require("../models/user.model");
const bcrypt = require('bcrypt')



const getRegister = (req,res)=>{

    userModel.find().then((users)=>{
        res.send(users)
    }).catch((err)=>{
        res.send({message:err.message})
    })
       
}

const getSignin = (req,res)=>{
    userModel.findOne({email:req.body.email})
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.send("error")
        console.log(err);
    })
}
const postSignin = (req,res)=>{
    let {email, password} = req.body
    userModel.findOne({email: email}).then((user)=>{
        console.log(user);
        if(user){ 
            const result = bcrypt.compareSync(password, user.password)
            if(result){
                res.send({message:'loggin in', isValid:true, status:true})
                console.log(user);
                console.log('loggin in');
            }else {
                res.send({message:'Incorrect password',isValid:false, status:true})
            }
        }else{
            res.send({message:'User not found',isValid:false, status:true})
        } 
    }).catch((err)=>{
        res.send({errorCode:err.code, errorMessage:err.message, status:false})
    })
}

const postRegister = (req,res)=>{
    let user = new userModel(req.body)
    user.save()
    .then((user)=>{
        res.send({message:'User saved', status:true});
    }).catch((err)=>{
        res.send({message:'user not saved', errorCode:err.code, errorMessage:err.message, status:false});
    })
}


module.exports = {postRegister, getRegister, getSignin, postSignin}