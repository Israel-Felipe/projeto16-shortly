import express from "express";
import signup from "./signup_routers.js";
import signin from "./signin_routers.js";
import urls from "./urls_routers.js";
import users from "./users_routers.js";
import ranking from "./ranking_routers.js";

const router = express.Router();
router.use(signup);
router.use(signin);
router.use(urls);
router.use(users);
router.use(ranking);

export default router;
