// initalize express
const express = require("express")
const { AddCartController } = require("../controller/Mycart")

// intilize Router From express
const my_cart_router = express.Router()



my_cart_router.post("/addcart",AddCartController)


    


module.exports = my_cart_router