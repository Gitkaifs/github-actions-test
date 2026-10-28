import express from 'express'
import { Routes } from './user.routes.js'
import connectDB from './db.js'
const app = express()
const PORT=3000
connectDB();
app.use(express.json())
app.use('/user',Routes)
app.listen(PORT,()=>{
    console.log(`server is started on ${PORT}`)
})