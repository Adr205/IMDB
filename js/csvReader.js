const path = require("path");
const fs = require("fs");

class csvReader{
    read(){
        const csvFilePath = path.join(__dirname, "../public/movie_results.csv");
        const csv = fs.readFileSync(csvFilePath, "utf8");
        return csv;
    }
}
module.exports = csvReader;