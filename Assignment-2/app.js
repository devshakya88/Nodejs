const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("This is middleware Second");
  res.send("Hello from second middleware");
});

app.use("/", (req, res, next) => {
  console.log("This is middleware first");
  res.send("Hello from first middleware");
});

app.listen(8080);
