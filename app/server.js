require("./server/config/config");

const express = require("express");
const bodyParser = require("body-parser");

const connectToDb = require("./server/db/mongoose");

const app = express();
connectToDb();

app.listen(process.env.PORT);
app.use(bodyParser.json());
console.log("Server is running");

// routes
require("./server/routes/auth")(app);

if (process.env.NODE_ENV === "production") {
  console.log("Production Sever");
} else {
  app.get("*", (req, res) => res.send("Welcome to Around the World"));
}
