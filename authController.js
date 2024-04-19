const User = require('./Models/User')
const Role = require('./Models/Role')
const bcrypt = require('bcryptjs');
const { validationRes } = require('express-validator')

class authController {
    async registration(req, res) {
        try {
            const errors = validationRes(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Registration error", errors})
            }
            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if (candidate) {
                return res.status(400).json({message: "Ogtater aydpisi anunov goyutyun chuni"})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({value: "USER"})
            const user = new User({username, password: hashPassword, roles: [userRole.value]})
            await user.save()
            return res.json({message: "User was created"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Resgistration error'})
        }
    }

    async login(req, res) {
        try {

        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Login error'})

        }

    }

    async getUsers(req, res) {
        try {

             res.json('server work')
        } catch (e) {

        }
    }
}

module.exports = new authController() 