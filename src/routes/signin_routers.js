import express from "express";

import { login_user } from "../controllers/signin_controllers.js";

const router = express.Router();

router.post("/signin", login_user);

export default router;
