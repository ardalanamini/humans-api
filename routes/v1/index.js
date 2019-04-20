const { Router } = require("express");
const humans = require("./humans");

const router = new Router();

router.use("/humans", humans);

module.exports = router;
