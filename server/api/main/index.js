const {
    Router
} = require("express");
const router = Router();
const ctrl = require("./main.ctrl");

router.get("/", ctrl.showPage);
router.get("/Tmap", ctrl.showTmapPage);
router.get("/sequencer", ctrl.showSequencer);
router.post("/sequencer", ctrl.Sequencer);

module.exports = router;