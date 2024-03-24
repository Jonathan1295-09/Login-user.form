import express from "express"
import User from "../models/user"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const router = express.Router()

//signup post
router.post("/signup", async (req, res) => {
    try{
    //hash password
    req.body.password = await bcrypt.hash(req.body.passwor, await bcrypt.genSelt(10))
    //user
    const user = await User.create(req.body)
    //Response
    res.json({status: "User"})
    } catch (error){
        res.status(400).json({error})
    }
})

//login post
router.post("/login", async (req, res) => {
    try{
    const {username, password} = req.body
    const user = await User.find({username})
    if (user) {
        const passwordCheck = await bcrypt.compare(password, user.password)
        if(passwordCheck){
            
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
router.post("/logout", async (req, res) => {})