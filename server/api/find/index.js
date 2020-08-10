const {
    Router
} = require("express");
const router = Router();
const ctrl = require("./marker.ctrl");

router.post("/", ctrl.findRoad);


module.exports = router;