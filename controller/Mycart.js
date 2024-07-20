const MyCart_model = require("../Models/MyCartSchema");


const AddCartController = async (req, res) => {
    try {
        const body = req.body
        const data = MyCart_model(body)
        const save = await data.save()
        return res.status(200).json({
            message: "Data saved successfully",
            data: save
        });

    } catch (error) {
        return res.status(500).json({
            message: "An error occurred",
            error: error.message
        });
    }
}

module.exports = { AddCartController }
