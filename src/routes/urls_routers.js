import express from "express";
import {
  short_url,
  open_short_url,
  get_id_url,
  delete_url,
} from "../controllers/urls_controllers.js";

import { auth_validation } from "../middlewares/auth_middlewares.js";

import {
  url_schemas_validation,
  url_not_duplicate,
  url_validation_user_id,
} from "../middlewares/urls_middlewares.js";

const router = express.Router();

router.post(
  "/urls/shorten",
  auth_validation,
  url_schemas_validation,
  url_not_duplicate,
  short_url
);

router.get("/urls/open/:short_url", open_short_url);

router.get("/urls/:id", get_id_url);

router.delete("/urls/:id", auth_validation, url_validation_user_id, delete_url);

export default router;
