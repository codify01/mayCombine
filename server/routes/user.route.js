const express = require('express')
const { register, getRegister } = require('../controller/user.controller')
const router = express.Router()

router.get('/register', getRegister)


module.exports = router