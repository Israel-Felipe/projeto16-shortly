import express from "express";
import signup from "./signup_routers.js";
import signin from "./signin_routers.js";
import urls from "./urls_routers.js";

const router = express.Router();
router.use(signup);
router.use(signin);
router.use(urls);

export default router;
