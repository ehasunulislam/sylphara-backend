import { Router } from "express";
import { auhtController } from "./auth.controller";
import { authMiddleware } from "../../middleware/auth.middleware";
import { UserRole } from "../../../prisma/generated/prisma/enums";


const router = Router();

// create user
router.post("/register", auhtController.createUser);

// verificaiton user
router.post("/verified-user", auhtController.veficationUser);

// Login user 
router.post("/login", auhtController.loginUser);

// m-21 agai giving a new accesstoken route
router.post("/refresh-token", auhtController.refreshToken);

// forgot password
router.post("/forgot-password",  auhtController.forgotPassword); 


export const  authRouter = router;