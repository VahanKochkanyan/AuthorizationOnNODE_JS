const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require("express-validator")
const authMiddleware =require('./middlewaree/authmiddlewaree')
const roleMiddleware = require('./middlewaree/roleMiddleware')

router.post('/registration', [
    check('username', "Username cannot be empty").notEmpty(),
    check('password', "Password must contain 4-10 characters").isLength({min: 4, max: 10})
    ], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware( ['USER', "ADMIN"]), controller.getUsers)
   
module.exports = router