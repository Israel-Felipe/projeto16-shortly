import express from "express";

import { urls_of_user } from "../controllers/users_controllers.js";

import { auth_validation } from "../middlewares/auth_middlewares.js";

const router = express.Router();

router.get("/users/me", auth_validation, urls_of_user);

export default router;
