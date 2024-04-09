const express = require("express");
const mongoose = require("mongoose");
const urlRouter = require("./routes/url");
const app = express();
const cors = require("cors"); // Import the CORS middleware

const PORT = 5000;
app.use(cors());

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/urlshortner")
  .then(() => console.log("MongoDB connnected"))
  .catch((err) => console.log("MongoDB connection error occures", err));

app.use("/api", urlRouter);

app.listen(PORT, () => console.log("Port started at 5000"));
