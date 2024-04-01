import express from "express"
import Note from "../models/notes.js"
import loggedIn from "../utils/loggedIn.js"

const router = express.Router()

router.use(loggedIn)

////index////
router.get("/", async (req,res) => {
    try {
        const username = req.payload.username
        const notes = await Note.find({username});
        res.json(notes);
    } catch(error){
        res.status(400).json({error})
    }
})

///Show////
router.get("/:id", async (req,res) => {
    try {
        const username = req.payload.username
        const notes = await Note.find({username, id:req.params.id});
        res.json(notes);
    } catch(error){
        res.status(400).json({error})
    }
})

///Create///
router.post("/", async (req,res) => {
    try {
        const username = req.payload.username;
        req.body.username = username
        const notes = await Note.create(req.body);
        res.json(notes);
    } catch(error){
        res.status(400).json({error})
    }
})

///Update///
router.put("/:id", async (req,res) => {
    try {

    } catch(error){
        res.status(400).json({error})
    }
})

///Delete///
router.delete("/:id", async (req,res) => {
    try {

    } catch(error){
        res.status(400).json({error})
    }
})

export default router