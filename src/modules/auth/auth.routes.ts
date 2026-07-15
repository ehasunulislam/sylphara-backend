import { Router } from "express";
import { auhtController } from "./auth.controller";


const router = Router();

// create user
router.post("/register", auhtController.createUser);

// Login user 
router.post("/login", auhtController.loginUser);


export const   authRouter = router;