"use strict";

import express from "express";

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD workflow using github actions.");
});

app.get("/getuser", (req, res) => {
  res
    .status(200)
    .send({
      username: "user007",
      email: "user01@gmail.com",
      userId: "w439ij93rj934jr3r",
    });
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
