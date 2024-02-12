import { Router } from "express";
import { register } from "../controllers/authController";
import { validateRegisterInput } from "../middlewares/validationMiddleware";

const router = Router();

router.post("/register", validateRegisterInput, register);

export default router;
