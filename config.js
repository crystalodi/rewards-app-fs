require("dotenv").config();
module.exports = {
    mongoUri: process.env.MONGO_URI,
    PORT: process.env.PORT || 8080,
    pexelApiKey: process.env.PEXEL_API_KEY
};