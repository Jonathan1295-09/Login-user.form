import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router()

//signup post
router.post("/signup", async (req, res) => {
    try{
    //hash password
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))
    //user
    const user = await User.create(req.body)
    //Response
    // const response = { username: user.username, role: user.role};
    res.json({status: "User created"})      
    } catch(error){
        res.status(400).json({ error });
    }
});

//login post
router.post("/login", async (req, res) => {
    try{
    const {username, password} = req.body
    const user = await User.findOne({username})
    if (user) {
        const passwordCheck = await bcrypt.compare(password, user.password)
        if(passwordCheck){
            const payload = {username}
            const token = await jwt.sign(payload, process.env.SECRET)
            res.cookie("token", token, {httpOnly: true, path: "/", secure: req.hostname === "localhost" ? false : true,}).json({payload, status: "logged in"})
        }else{
            res.status(400).json({error: "Password does not match"})
        }
        }else{
                    res.status(400).json({error: "User does not exist"})
                }

    } catch(error){
        res.status(400).json({error})
    }
});

//logout post
router.post("/logout", async (req, res) => {
    res.clearCookie("token").json({response: "You are logged out"});
});

export default router