import { Router } from "express";
import { auhtController } from "./auth.controller";


const router = Router();

// create user
router.post("/register", auhtController.createUser);

// Login user 
router.post("/login", auhtController.loginUser);

// m-21 agai giving a new accesstoken route
router.post("/refresh-token", auhtController.refreshToken);


export const   authRouter = router;