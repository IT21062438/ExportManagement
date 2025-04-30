//Import express package & mongoose package by require
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//Import expres package & mongoose package by require

//coming to server json format, so convert to js format
const bodyparser = require("body-parser");
require("dotenv").config();
//mongoose.set("strictQuery", false);
const AuthRouter = require("./routes/authRouter");

const app = express();

//Customer requests
const requestRoutes = require("./routes/requests");
//Customer Inquiries
const inquiryRoutes = require("./routes/inquiries");
//inventory
const inventoryRoutes = require("./routes/inventories");
//production
const productionRoutes = require("./routes/productions");

//qualitycheck
const qcRoutes = require("./routes/qualitycheck");

//transport management
const transportRoutes = require("./routes/transports");
const exportDetails = require("./routes/exportDetails");

//middleware
app.use(bodyparser.json());
app.use(cors());

//route middleware
app.use("/auth", AuthRouter);
app.use(inventoryRoutes); //Inventory

app.use(productionRoutes); //Production

app.use(requestRoutes); //Customer requests

app.use(qcRoutes); //Quality Check
app.use(transportRoutes); // transport management

app.use(inquiryRoutes); //Customer inquiries


app.use(exportDetails); //Export Details
//app.use(buyerRegister); //Buyer Register
//app.use(buyerRegisterRep); //Buyer Register Report


// Load environment variables
const PORT = process.env.PORT || 8000;
const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Mongodb Successfully Connected");
  })
  .catch((err) => console.log("mongodb connection Failed", err));

app.listen(PORT, () => {
  console.log("\n");
  console.log(`App is running on ${PORT}`);
});

module.exports = mongoose;
