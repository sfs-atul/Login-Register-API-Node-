const router = require('express').Router();
const mongoose = require('mongoose');


const Register = mongoose.model('Register');


router.post('/', async (req, res) => {
    try {
        const register = new Register();
        register.username = req.body.username;
        register.password = req.body.password;
        await register.save();
        res.send(register);
    } catch (error) {
        res.status(500);
    }
});
module.exports = router;       