const { Router } = require("express");
const v1 = require("./v1");
const { details } = require("../controllers");

const router = new Router();

router.get("", details);

router.use("/v1", v1);

module.exports = router;
