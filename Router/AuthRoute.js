const express = require("express")
const { user_regester, user_login } = require("../controller/AuthController")

 const Auth_router = express.Router()


// Auth_router.put("/login",user_login)
Auth_router.post("/sginup",user_regester)
Auth_router.post("/login",user_login)

module.exports = Auth_router