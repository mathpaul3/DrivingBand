const {
    Router
} = require("express");
const router = Router();

router.use("/", require("./api/main"));

module.exports = router;