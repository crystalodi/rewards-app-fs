const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {mongoUri, PORT} = require("./config");
const cors = require("cors");
const morgan = require("morgan");
const rewardsRoutes = require("./routes/api/rewards");

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
.then(() => console.log("MongoDB database connected")).catch((err) => console.log(err));

app.use('/api/rewards', rewardsRoutes)
app.get("/", (req, res) => res.send("Hello World"));
app.listen(PORT, () => console.log(`App listening at port ${PORT}`));

