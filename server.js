const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {mongoUri, PORT} = require("./config");
const cors = require("cors");
const morgan = require("morgan");
const rewardsRoutes = require("./routes/api/rewards");
const pexelRoutes = require("./routes/api/pexel");
const path = require("path");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
    useFindAndModify: true
})
.then(() => console.log("MongoDB database connected"))
.catch((err) => console.log(err));

app.use("/api/rewards", rewardsRoutes)
app.use("/api/pexels", pexelRoutes)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/dist"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
    })
}
app.listen(PORT);

