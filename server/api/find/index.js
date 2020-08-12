const { Router } = require("express");
const router = Router();
const ctrl = require("./find.ctrl");

router.post("/", ctrl.findRoad);

module.exports = router;
