const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* REGISTER USER */

router.post("/register", async (req,res)=>{

try{

const {name,email,password} = req.body;

/* check existing user */
const existingUser = await User.findOne({email});
if(existingUser)
return res.status(400).json("User already exists");

/* hash password */
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password,salt);

/* create user */
const user = await User.create({
name,
email,
password:hashedPassword
});

res.json(user);

}catch(err){
res.status(500).json(err.message);
}

});

/* LOGIN USER */

router.post("/login", async (req,res)=>{

try{

const {email,password} = req.body;

const user = await User.findOne({email});
if(!user) return res.status(400).json("User not found");

/* compare password */
const valid = await bcrypt.compare(password,user.password);
if(!valid) return res.status(400).json("Wrong password");

/* create token */
const token = jwt.sign(
{id:user._id},
"SECRET_KEY",
{expiresIn:"1d"}
);

res.json({token,user});

}catch(err){
res.status(500).json(err.message);
}

});

module.exports = router;