import { Router } from "express";
import { auhtController } from "./auth.controller";


const router = Router();

// create user
router.post("/register", auhtController.createUser);

export const   authRouter = router;