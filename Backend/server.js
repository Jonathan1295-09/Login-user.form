import express from "express"
import morgan from "morgan"
import cors from "cors"
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())


//Routes and routers

app.get("/test", (req,res) =>{
    res.send("server is working")
})

//listen
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`LISTEN ON PORT ${PORT}`)
})