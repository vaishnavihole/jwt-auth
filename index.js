import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors';
import connectDB from './config/connectdb.js'

const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

app.use(cors())

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})