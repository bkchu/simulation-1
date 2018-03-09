const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const path = require("path");
const massive = require("massive");
const controller = require("./controllers/bin_controller");
require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname, "../build")));

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.get("/api/shelf/:id", controller.getShelf);
app.get("/api/bin/:id", controller.getBin);
app.put("/api/bin/:id", controller.updateBin);
app.delete("/api/bin/:id", controller.deleteBin);
app.post("/api/bin/:id", controller.createBin);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
