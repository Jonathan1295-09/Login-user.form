import express from "express"
import Note from "../models/notes.js"
import loggedIn from "../utils/loggedIn.js"

const router = express.Router()

router.use(loggedIn)

////index////
router.get("/", async (req,res) => {
    try {
        const username = req.payload.username
        const note = await Note.find({username});
        res.json(note);
    } catch(error){
        res.status(400).json({error})
    }
})

///Show////
router.get("/:id", async (req,res) => {
    try {
        const username = req.payload.username
        const note = await Note.findOne({username, id:req.params.id});
        res.json(note);
    } catch(error){
        res.status(400).json({error})
    }
})

///Create///
router.post("/", async (req,res) => {
    try {
        const username = req.payload.username;
        req.body.username = username
        const note = await Note.create(req.body);
        res.json(note);
    } catch(error){
        res.status(400).json({error})
    }
})

///Update///
router.put("/:id", async (req,res) => {
    try {
        const username = req.payload.username;
        req.body.username = username
        const notes = await Note.findByIdAndUpdate(req.params.id, req.body);
        res.json(notes);
    } catch(error){
        res.status(400).json({error})
    }
})

///Delete///
router.delete("/:id", async (req,res) => {
    try {
        const username = req.payload.username;
        req.body.username = username
        const notes = await Note.deleteOne({id: req.params.id, username});
        res.json(notes);
    } catch(error){
        res.status(400).json({error})
    }
})

export default router