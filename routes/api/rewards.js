const {Router} = require("express");
const Rewards = require("../../models/Rewards");

const router = Router();

router.get("/", async (req, res) => {
    try {
        const rewards = await Rewards.find();
        res.status(200).json(rewards)
    } catch (error) {
        console.error(error)
        res.status(500)
    }
});

router.get("/:id", async (req, res) => {
    try {
        const reward = await Rewards.findById(req.params.id);
        res.status(200).json(reward)
    } catch (error) {
        console.error(error)
        res.status(500)
    }
})

router.put("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const reward = await Rewards.findByIdAndUpdate({"_id": id}, req.body);
        res.status(200).json(reward);
    } catch (error) {
        console.error(error)
        res.status(500)
    }
});

module.exports = router;