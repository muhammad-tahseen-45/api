const mongoose = require('mongoose');

// const dbconnect = async () => {

//     await mongoose.connect('mongodb://127.0.0.1:27017/E_commecre_perfume');
//     mongoose.connection.on("connected", () => console.log("data base is connectes ::"))

//     mongoose.connection.on("error", (error) => console.log(`database is connected ${error}`))


// }

// module.exports = dbconnect





async function dbconnect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/E_commecre_perfume');
        console.log('Database is connected');
    } catch (error) {
        console.error(`Database connection error: ${error}`);
    }

    mongoose.connection.on('error', (error) => {
        console.error(`Database connection error: ${error}`);
    });
}

module.exports = dbconnect;


