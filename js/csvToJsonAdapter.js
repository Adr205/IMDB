class csvToJsonAdapter {
    constructor(reader) {
        this.reader = reader;
    }

    read() {
        const csv = this.reader.read();
        const csvLines = csv.split("\n");
        const csvHeaders = csvLines[0].split(",");
        const csvData = csvLines.slice(1).map(line => {
            return line.split(",").reduce((obj, value, index) => {
                obj[csvHeaders[index]] = value;
                return obj;
            }, {});
        });
        const filteredData = csvData.map(movie => {
            return {
                movie_title: movie.movie_title,
                year: movie.year,
                rating: movie.rating,
                preference_key: movie.preference_key
            };
        });
        return filteredData;
    }
}

module.exports = csvToJsonAdapter;