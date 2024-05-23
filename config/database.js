const mongoose = require('mongoose');

require('dotenv').config();

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('DATABASE is connected successfully')
    })
    .catch((error) => {
        console.error('ERROR:' , error)
        process.exit(1)
    })
};

module.exports = dbconnect;