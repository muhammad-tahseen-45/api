const mongoose = require('mongoose');

const User_Regester_schema = new mongoose.Schema({
    User_name :{
        require:[true,"user name is compulsury fill"],
        unique: [true,"user name should be unique try another username "],
        type:String,
        lowercase:true

    },
    
     name :{
        require:true,
        type:String,

    },
   
    
     email :{
        require:[true,"email should be require"],
        unique: [true,"email should be unique try another email"],
        type:String,
        lowercase:true

    },
     password :{
        require:[true,"password should be require"],
        type:String,
        

    },
    

})

const User_Regester_collection = mongoose.model("users-regester",User_Regester_schema);

module.exports = User_Regester_collection