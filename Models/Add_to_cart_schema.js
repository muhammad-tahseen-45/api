const mongoose = require('mongoose');

const addToCartSchema = new mongoose.Schema({
    // product_id: {
    //     required: true,
    //     unique: true,
    //     type: String,
    //     lowercase: true
    // },
    // product_name: {
    //     required: true,

    //     type: String,
    //     lowercase: true
    // },
    // product_price: {
    //     required: true,

    //     type: String,
    //     lowercase: true
    // },
    // product_selected_item: {
    //     required: true,

    //     type: String,
    //     lowercase: true
    // }
    name: {
        require: true,
        unique: true,
        type: String,
        lowercase: true
    },
    discription:{
        type:String,
        require:true
    },
    startdate:{
        type:String,
        require:true
    },
    module:{
        type:String,
        require:true
    },
    // address:{
    //     type:String,
    //     require:true
    // }
}
);

const addToCart_model = mongoose.model("AddToCart", addToCartSchema);
module.exports = addToCart_model;
