const { Router } = require("express");

// Controllers
const users = require("./routes/users.js");

const router = Router();

/**
 * Routes
 */
router.use(users);

module.exports = router;
