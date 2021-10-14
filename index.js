const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB connection success"))
    .catch((error) => console.log(error));

app.listen(process.env.PORT || 7070, () => { console.log("Backend is running!"); });
