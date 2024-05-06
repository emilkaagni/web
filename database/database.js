// importing
const mongoose = require('mongoose')
const dotenv = require('dotenv')


// external file
// Functions (connection)
// make a unique function name
// Export

// dotenv Configuration
dotenv.config()


const connectDatabase = () => {
    mongoose.connect(process.env.MONGODB_CLOUD).then(() => {
        console.log("Database connected")
    })
}

// Exporting the function
module.exports = connectDatabase