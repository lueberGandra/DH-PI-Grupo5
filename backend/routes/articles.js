const express = require("express");
const router = express.Router();
const controller = require("../controllers/articles");

router.post("/add", controller.create);
router.get("/show/:id?", controller.show);
router.get("/update/:id", controller.update);
router.post("/delete/:id", controller.delete);
router.get("/", controller.showAll);

module.exports = router;
