// initalize express
const express = require("express")
const { Product_Cart_Data, get_product_data } = require("../controller/Add_To_Cart");
// intilize Router From express
const cart_router = express.Router()



cart_router.post("/Save_in_cart",Product_Cart_Data)
cart_router.get("/get_all_products",get_product_data)

    


module.exports = cart_router