// Ensure this path is correct

const addToCart_model = require("../Models/Add_to_cart_schema");

const get_product_data =  async (req, res) => {
    try {
        const data =   await addToCart_model.find()
        return res.status(200).json({
            data:data
        })
    } catch (error) {
        return res.status(500).json({       
            message: "An error occurred",
            error: error.message
        });
    }
}

const Product_Cart_Data = async (req, res) => {
    try {
        const body = req.body;
        const data = addToCart_model(body); // Instantiate the model with the request body
        const savedData = await data.save(); // Save the data to the database

        return res.status(200).json({
            message: "Data saved successfully",
            data: savedData
        });
    } catch (error) {
        console.log(error.message); // Correct error property to log
        return res.status(500).json({
            message: "An error occurred",
            error: error.message
        });
    }
}




module.exports = { Product_Cart_Data, get_product_data };
