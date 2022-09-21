var router = require("express").Router();

router.get("/", async (req, res) => {
    const title = req.query.title;

    res.json({ title });
});
module.exports = router;
