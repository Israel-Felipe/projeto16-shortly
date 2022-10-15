import express from "express";
import { login_user } from "../controllers/signin_controllers.js";
import { signin_schemas_validation } from "../middlewares/signin_middlewares.js";

const router = express.Router();

router.post("/signin", signin_schemas_validation, login_user);

export default router;
