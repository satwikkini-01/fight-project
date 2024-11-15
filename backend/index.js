const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

const flightRoute = require("./routes/flight");

const corsMiddleware = cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["X-Requested-With", "Content-Type", "Authorization"],
});

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch((e) => console.log("MongoDB connection error:", e));

app.options("*", cors());
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/flights", flightRoute);

app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
});
