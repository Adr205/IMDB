const express = require("express");
const router = express.Router();
const config = require("../config");
const fs = require("fs");
const path = require("path");
const csvReader = require("../js/csvReader");
const csvToJsonAdapter = require("../js/csvToJsonAdapter");

router.get("/", (req, res) => {
  const key = req.query.pref;
  const rating = req.query.rating;

  //Adapter Design Pattern
  /*
  In this part, the Adapter design pattern is used because it 
  has an interface that translates an object so that another can understand it.
  */
  const initData = new csvReader();
  const data = new csvToJsonAdapter(initData).read();

  const result = data.filter((item) => {
    return item.preference_key.includes(key);
  });

  const filteredData = result.map((movie) => {
    return {
      movie_title: movie.movie_title,
      year: movie.year,
      rating: movie.rating,
    };
  });

  if (rating === "false") {
    // rating ascending order
    filteredData.sort((a, b) => {
      return a.rating - b.rating;
    });

    res.status(200).json(filteredData);
  } else {
    res.status(200).json(filteredData);
  }
});

module.exports = router;
