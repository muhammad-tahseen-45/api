// import express
const express = require("express")
const cart_router = require("./Router/Add_To_Cart_Data")
const dbconnect = require("./Database/db")



// Instanse of Express
const app = express()

app.use(express.json())

app.use("/", cart_router)
dbconnect()
app.listen(500, () => {
    console.log(`sever is running ${500}`)
})