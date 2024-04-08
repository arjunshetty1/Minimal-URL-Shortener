const express = require("express");
const router = express.Router();
const shortid = require("shortid");
const URL = require("../models/url");

router.post("/shorten", async (req, res) => {
  const body = req.body;
  const shortID = shortid(2);
  await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
  });
  const shortenedURL = `http://localhost:3000/api/${shortID}`;
  return res.send(shortenedURL);
});

router.get("/:shortID", async (req, res) => {
  const shortID = req.params.shortID;
  const data = await URL.findOne({ shortId: shortID });
  res.redirect(data.redirectUrl);
});

module.exports = router;
