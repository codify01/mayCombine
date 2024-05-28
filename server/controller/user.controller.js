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


const register = (req,res)=>{
    console.log(req.body);
    let user = new userModel(req.body)
    user.save()
    .then((user)=>{
        console.log('User saved');
        console.log(user);
    }).catch((err)=>{
        console.log('user not saved');
        console.log(err);

    })
}


module.exports = {register, getRegister}