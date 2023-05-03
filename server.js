const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/proxy", async (req, res) => {
  const url = req.query.url;
  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
