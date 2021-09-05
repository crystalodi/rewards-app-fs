require("dotenv").config();
module.exports = {
    mongoUri: process.env.MONGO_URI,
    PORT: process.env.PORT || 8080,
    pexelClientKey: process.env.PEXEL_CLIENT_KEY
};