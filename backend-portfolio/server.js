const express = require('express')
require("dotenv").config();
const app = express()
const dbConfig = require("./config/dbConfig");
const port = process.env.PORT || 5000;
app.listen(3000, () => {
    console.log(`Server Running On Port ${port}`);
});