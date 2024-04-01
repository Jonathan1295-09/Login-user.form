import express from "express"
import Note from "../models/notes.js"

const router = express.Router()

////index////
router.get("/", async (req,res) => {})

///Show////
router.get("/:id", async (req,res) => {})

///Create///
router.post("/", async (req,res) => {})

///Update///
router.put("/:id", async (req,res) => {})

///Delete///
router.delete("/:id", async (req,res) => {})

export default router