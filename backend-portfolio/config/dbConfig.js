const mongoogse = require('mongoose');
mongoogse.connect(process.env.mongo_url);

const connection = mongoogse.connection;

connection.on('error', () => {
    console.log("Error connecting to Database");
});

connection.on('connected', () => {
    console.log("Mongo DB Connection Successfull");
});

module.exports = connection;