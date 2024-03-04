import mongoose from "../db/connection.js"

const {Schema, model} = mongoose

const notreSchema = new Schema({
    title: String,
    message: String,
    username: String
})

const Note = model("Note", notreSchema)

export default Note