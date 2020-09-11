const SWAPI_URL = "https://swapi.dev/api/people";

const express = require("express");

const app = express();

app.get("/characters/:name", function (req, res) {
  res.send("hello world");
});

app.listen(3031, () => {
  console.log(`Example app listening at http://localhost:3031`);
});
