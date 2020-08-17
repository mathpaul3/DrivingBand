const {
    Router
} = require("express");
const router = Router();

router.use("/", require("./main")); // index는 안써도 알아서 찾음
router.use("/find", require("./find"));
router.use("/instrument", require("./instrument"));

module.exports = router;