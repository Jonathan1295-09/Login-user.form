import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect(DATABASE_URL) // connecting to database

mongoose.connection
.on("open", () => {console.log("Mongo is Connected")})
.on("close", () => {console.log("Mongo is Disconnected")}) 
.on("open", () => {console.log('Mongo is Connected')})

export default mongoose