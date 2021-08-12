const express = require("express");
const db = require("./database/config");
const mongoose = require("mongoose");
const cors = require("cors");


class App {
  constructor() {
    this.express = express();
    this.database();
    this.middlewares();
    this.routes();
    this.express.use(cors());

    this.express.listen(process.env.PORT || 3001)
  }

  database() {
    mongoose.Promise = global.Promise;
    mongoose.connect(db.uri, { useNewUrlParser: true, useUnifiedTopology: true }).catch(err => console.log(err));
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;