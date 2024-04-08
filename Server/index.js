const express = require("express");
const mongoose = require("mongoose");
const urlRouter = require("./routes/url");
const app = express();

const PORT = 3000;

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/urlshortner")
  .then(() => console.log("MongoDB connnected"))
  .catch((err) => console.log("MongoDB connection error occures", err));

app.use("/api", urlRouter); 

app.listen(PORT, () => console.log("Port started at 3000"));
