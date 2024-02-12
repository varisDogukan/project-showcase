import { Router } from "express";
import { register, login } from "../controllers/authController";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../middlewares/validationMiddleware";

const router = Router();

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);

export default router;
