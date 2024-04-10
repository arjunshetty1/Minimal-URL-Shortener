const express = require("express");
const mongoose = require("mongoose");
const urlRouter = require("./routes/url");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error occurs", err));

app.use("/api", urlRouter);

app.listen(PORT, () => console.log(`Port started at ${PORT}`));
