const userModel = require("../models/user.model");
const bcrypt = require('bcryptjs')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET
const nodemailer = require('nodemailer')



const getRegister = (req,res)=>{

    userModel.find().then((users)=>{
        res.send(users)
    }).catch((err)=>{
        res.send({message:err.message})
    })
       
}

const getuser = (req,res)=>{
    userModel.findOne({email:req.params.user})
    .then((user)=>{
        res.send(user)
    }).catch((err)=>{
        res.send(err)
    })
}

const getSignin = (req,res)=>{
    userModel.findOne({email:user})
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
                const token = jwt.sign({user}, secret, {expiresIn: '1h'})
                res.send({message:'loggin in', isValid:true, status:true, token:token})
                console.log(user);
                console.log(token);
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

const sendMail = ()=>{
    const transporter = nodemailer.createTransport({
       service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAILPASS,
        },
      });
      let mailOptions = {
        from: process.env.EMAIL,
        to: "amoleuthman2023@gmail.com, ", // list of receivers
        subject: "Your registration was sucessfull!!! ✔", // Subject line
        // text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      }

      transporter.sendMail(mailOptions).then((info)=>{
        res.status(201).json({message:'Mail sent successfully', status:true})
        console.log(info)
        }).catch((err)=>{
          res.status(500).json({message:'Mail was not sent succefully', status:false})
        console.log(err);
      })
//  console.log('email sent');
}


module.exports = {postRegister, getRegister, getSignin, postSignin, getuser, sendMail}