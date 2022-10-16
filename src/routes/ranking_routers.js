import express from "express";
import { ranking_users } from "../controllers/ranking_controllers.js";

const router = express.Router();

router.get("/ranking", ranking_users);

export default router;
