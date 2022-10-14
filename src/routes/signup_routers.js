import express from "express";

import { create_user } from "../controllers/signup_controllers.js";

/* import {
  customerBodyValidation,
} from "../middlewares/customers.middlewares.js"; */

const router = express.Router();

router.post("/signup", create_user);

export default router;
