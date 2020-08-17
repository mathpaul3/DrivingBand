const {
    Router
} = require("express");
const router = Router();
const ctrl = require("./inst.ctrl");

router.get("/create", ctrl.create);

module.exports = router;