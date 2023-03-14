const express = require('express')
const app = express()
const path = require("path")
app.use('/', (req, res, next) => {
    res.sendFile( __dirname +"/index.html")
    
  })
  app.listen(3000, (()=>{ console.log("app is listening")}))