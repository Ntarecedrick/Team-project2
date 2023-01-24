const sequelize = require("./config/config")
import express from "express"

const app= express()

app.listen(5000, ()=> console.log("port server running"))

     sequelize.authenticate().then(()=>{
        console.log("Connection has been established successfully.")
     })
    
