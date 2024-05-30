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
    userModel.findOne()
    res.send('sfsvddv')
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