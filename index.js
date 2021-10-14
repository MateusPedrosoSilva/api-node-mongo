const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://mateus:papao@api-test.exipg.mongodb.net/shop?retryWrites=true&w=majority")
    .then(() => console.log("DB connection success"))
    .catch((error) => console.log(error));

app.listen(7070, () => {
    console.log("Backend is running!");
});
