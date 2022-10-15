import express from "express";
import { create_user } from "../controllers/signup_controllers.js";
import {
  signup_schemas_validation,
  signup_email_not_duplicate,
} from "../middlewares/signup_middlewares.js";

const router = express.Router();

router.post(
  "/signup",
  signup_schemas_validation,
  signup_email_not_duplicate,
  create_user
);

export default router;
