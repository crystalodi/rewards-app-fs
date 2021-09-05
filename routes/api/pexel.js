const {Router} = require("express")
const {createClient} = require("pexels")
const {pexelClientKey} = require("../../config");
const pexelClient = createClient(pexelClientKey);

const router = Router();

router.get("/:id", async (req, res) => {
    try {
        const photo = await pexelClient.photos.show({ id: req.params.id });
        res.status(200).json(photo)
    } catch (error) {
        console.error(error)
        res.status(500)
    }
})
module.exports = router;