const { Router } = require("express");
const router = Router();

router.use("/main", require("./api/main"));

module.exports = router;
