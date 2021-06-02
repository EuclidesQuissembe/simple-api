const { Router } = require("express");

const router = Router();

const userController = require("../controllers/userController");

router.get("/users", userController.index);
router.get("/users/:id", userController.show);
router.post("/users", userController.store);
router.put("/users/:id", userController.update);

router.get("/users/:id/contacts", userController.contacts);

module.exports = router;
