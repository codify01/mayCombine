const express = require('express')
const { postRegister, getRegister, postSignin, getSignin,getuser,sendMail } = require('../controller/user.controller')
const router = express.Router()

router.get('/register', getRegister)
router.get('/register/:user', getuser)
router.post('/register', postRegister)
router.get('/signin', getSignin)
router.post('/signin', postSignin)
router.get('/sendMail', sendMail)



module.exports = router