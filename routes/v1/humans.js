const { Router } = require("express");
const { humans: controller } = require("../../controllers");

const router = new Router();

router.param("human", controller.param);

router.get("/", controller.index);

router.get("/:human/pets", controller.indexPets);

module.exports = router;
