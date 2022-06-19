const express = require("express");
const router = express.Router();
const config = require("../config");
const fs = require("fs");
const path = require("path");

// router.get("/", (req, res) => {
//     read csv 
//     const csvFilePath = path.join(__dirname, "../public/movie_results.csv");
//     const csv = fs.readFileSync(csvFilePath, "utf8");
//     const csvLines = csv.split("\n");
//     const csvHeaders = csvLines[0].split(",");
//     const csvData = csvLines.slice(1).map(line => {
//         return line.split(",").reduce((obj, value, index) => {
//             obj[csvHeaders[index]] = value;
//             return obj;
//         }, {});
//     });
//     res.status(200).json(csvData);
// });

router.get("/", (req, res) => {
    const key = req.query.pref;
    const rating = req.query.rating;

    const csvFilePath = path.join(__dirname, "../public/movie_results.csv");
    const csv = fs.readFileSync(csvFilePath, "utf8");
    const csvLines = csv.split("\n");
    const csvHeaders = csvLines[0].split(",");
    const csvData = csvLines.slice(1).map(line => {
        return line.split(",").reduce((obj, value, index) => {
            obj[csvHeaders[index]] = value;
            return obj;
        }, {});
    });

    const result = csvData.filter(item => {
        return item.preference_key.includes(key);
    });

    if(rating === "false"){
        // rating ascending order 
        result.sort((a, b) => {
            return a.rating - b.rating;
        });

        res.status(200).json(result);
    }else{
        res.status(200).json(result);
    }


});

module.exports = router;