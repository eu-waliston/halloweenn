const Express = require("express");
const router = Express.Router();

router.get("/", (req,res) => {
    res.status(200).render('pages/index');
})

module.exports = router;