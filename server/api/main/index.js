const { Router } = require("express");
const router = Router();
const ctrl = require("./main.ctrl");

router.get("/", ctrl.showMainPage);
router.get("/category", ctrl.showCategoryPage);
router.get("/Tmap", ctrl.showTmapPage);
    
module.exports = router;