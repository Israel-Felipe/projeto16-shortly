import express from "express";
import { short_url } from "../controllers/urls_controllers.js";

const router = express.Router();

router.post("/urls/shorten", short_url);

export default router;
