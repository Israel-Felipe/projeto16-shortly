import express from "express";
import { short_url } from "../controllers/urls_controllers.js";
import { auth_validation } from "../middlewares/auth_middlewares.js";

const router = express.Router();

router.post("/urls/shorten", auth_validation, short_url);

export default router;
