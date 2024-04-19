const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require("express-validator")

router.post('/registration', [
    check('username', "Ogtateri anuny chi karox datark linel").notEmpty(),
    check('password', "Gaxtnabery petq e lini 4 ev 10 simvolic").isLength({min: 4, max: 10})
    ], controller.registration)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)
   
module.exports = router