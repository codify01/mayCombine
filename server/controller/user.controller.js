const userModel = require("../models/user.model");



const getRegister = (req,res)=>{
        res.send([
            {
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz"
            },
            {
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz"
            },
            {
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz"
            },
            {
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz"
            },
        ])
}

const getSignin = (req,res)=>{
    res.send('sfsvddv')
}
const postSignin = (req,res)=>{
    userModel.findOne({email:req.body.email}).then((user)=>{
        console.log(user);
        if(user.password === req.body.password){
            res.send({message:'loggin in', isValid:true, status:true})
            console.log(user);
        }else{
            res.send({message:'Incorrect password',isValid:false, status:true})
        }
    }).catch((err)=>{
        res.send({errorCode:err.code, errorMessage:err.message, status:false})
    })
}

const postRegister = (req,res)=>{
    let user = new userModel(req.body)
    user.save()
    .then((user)=>{
        console.log(user);
        res.send({message:'User saved', status:true});
    }).catch((err)=>{
        res.send({message:'user not saved', errorCode:err.code, errorMessage:err.message, status:false});
        console.log(err);

    })
}


module.exports = {postRegister, getRegister, getSignin, postSignin}