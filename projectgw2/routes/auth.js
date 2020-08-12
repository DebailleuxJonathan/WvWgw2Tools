const router = require('express').Router();
const user = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {registerValidation,loginValidation} = require('./validation');




router.post('/register', async (req, res) => {
    //VALIDATE THE DATA BEFORE WE A USER
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Hashes passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Check if user is already in DB

    const emailExist = await user.findOne({email: req.body.email});
    if(emailExist) return  res.status(400).send('Email already exists');

    //Create new User
     const User = new user({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
         api: req.body.api
    });
    try {
        const savedUser = await User.save();
        res.send({User: User._id});
    } catch (err) {
        res.status(400).send(err);
    }
});

//Login

router.post('/login', async (req,res) =>{

    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    //Checking if the email exist
    const userEmail = await user.findOne({email: req.body.email});
    if(!userEmail) return  res.status(400).send("Email is not found");
    //Check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, userEmail.password);
    if (!validPassword) return  res.status(400).send("Invalid Password");

    //create and assign token

    const token = jwt.sign({_id: userEmail._id }, process.env.TOKEN_SECRET);
    res.header('auth-token',token).send(token);

});


module.exports = router;
