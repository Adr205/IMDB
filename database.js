const moongose = require("mongoose");
const config = require("./config");

moongose
  .connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => console.log("db connected"))
  .catch((err) => console.log(err));

  module.exports = moongose;