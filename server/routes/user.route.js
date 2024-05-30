const express = require('express')
const { postRegister, getRegister, postSignin, getSignin } = require('../controller/user.controller')
const router = express.Router()

router.get('/register', getRegister)
router.post('/register', postRegister)
router.get('/signin', getSignin)
router.post('/signin', postSignin)


module.exports = router