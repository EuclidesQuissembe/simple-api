import { Router } from "express";

const router = Router();

import * as HomeController from "./controllers/homeController";

/**
 * Routes
 */
import UserRoutes from "./routes/users";

router.get("/", HomeController.home);
router.use(UserRoutes);

export default router;
