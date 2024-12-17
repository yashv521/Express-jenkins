const express = require('express')

const app = express()

app.use('/',(req,res)=>{
    res.send("Hello World V 1.0 updated!!")
})

app.listen('4000','0.0.0.0',()=>{
    console.log("Listening to port 4000")
})
