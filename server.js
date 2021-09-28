const express = require("express");

const cors = require("cors");

const axios = require("axios");
const mongoose = require("mongoose");

require("dotenv").config();

const server = express();

server.use(cors());
server.use(express.json());
const db = mongoose.connection;
mongoose.connect(process.env.DBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db.once("open", () => console.log("conncted to data base"));
db.on("error", (err) => console.log("err", err));
const {
  getAllFruit,
  GetUserFruit,
  createUserFruit,
  deleteUserFruit,
  updateUserFruit,
} = require("./CURS");

server.get("/fruit", getAllFruit);
server.get("/userFruit", GetUserFruit);
server.post("/userFruit", createUserFruit);
server.delete("/userFruit/:id", deleteUserFruit);
server.put("/userFruit/:id", updateUserFruit);

server.listen(process.env.PORT, () =>
  console.log("server is running " + process.env.PORT)
);
