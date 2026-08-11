import { Router } from "express";
import { profileController } from "./profile.controller";
import { authMiddleware } from "../../middleware/auth.middleware";
import { UserRole } from "../../../prisma/generated/prisma/enums";

const router = Router();

// get Profile form DB withing login user
router.get("/me", 
    authMiddleware.auth(UserRole.Admin, UserRole.Student, UserRole.Developer),  
    profileController.getProfile
);

// update profile within login user
router.patch("/me", 
    authMiddleware.auth(UserRole.Admin, UserRole.Student, UserRole.Developer),  
    profileController.updateProfile
);


export const profileRouter = router;