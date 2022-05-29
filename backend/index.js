const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const app = express();
const database = require("./database");

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
// app.use(express.json({limit: '25mb'}));
// Jason with 50mb limit
app.use(express.json({ limit: "50mb" }));
// set bodyParser
// app.use(bodyParser.urlencoded({ extended: true , limit: '50mb'}));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

//Routes
app.use("/api/imdb", require("./routes/imdb.routes"));
app.use("/api/user", require("./routes/user.routes"));
app.use("/api/login", require("./routes/login.routes"));

//Static Files
app.use(express.static(path.join(__dirname, "public")));

//Start server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});