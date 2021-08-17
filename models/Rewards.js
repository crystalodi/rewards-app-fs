const {Schema, model} = require("mongoose");

const RewardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const Reward = model("Reward", RewardSchema, "rewards");
module.exports = Reward;