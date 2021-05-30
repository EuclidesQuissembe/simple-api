import { Router } from "express";

const router = Router();

import UserController from "../controllers/UserController";

const userController = new UserController();

router.get("/users", userController.index);
router.get("/users/:id", userController.show);
router.post("/users", userController.store);
router.put("/users/:id", userController.update);

export default router;
