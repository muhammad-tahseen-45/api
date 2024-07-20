const mongoose = require('mongoose');

const MyCartSchema = new mongoose.Schema({
    product_id: {
        required: true,
        type: String,
        lowercase: true
    },
    product_name: {
        required: true,

        type: String,
        lowercase: true
    },
    product_price: {
        required: true,

        type: String,
        lowercase: true
    },
  
    product_quantity:{
        required: true,

        type: String,
        lowercase: true
    },

}
);

const MyCart_model = mongoose.model("MyCart", MyCartSchema);
module.exports = MyCart_model;
