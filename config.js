require('dotenv').config();
const config = {
    app: {
        port: process.env.PORT || 3000
    },
    db: {
        uri: process.env.URI
    }
}

module.exports = config;