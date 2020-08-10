const { Router } = require("express");
const router = Router();

router.use("/main", require("./main"));

module.exports = router;
