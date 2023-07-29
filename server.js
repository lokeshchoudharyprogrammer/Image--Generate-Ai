const express = require('express')
const mongoose = require('mongoose')
const readline = require("readline");
const { generateImage } = require('./controls/img');
var cors = require('cors')
const app = express();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

app.use(express.json())
app.use(express.static('public'))
// generateImage
app.use(cors())
app.post('/openai/image', generateImage)
app.listen(5000, () => {
    console.log("require('dotenv').config()")
})
app.get("/",(req,res)=>{
    res.send("<h1>Hello welcome to img gen</h1>")
})
require('dotenv').config()