import { Router } from "express";
import { profileController } from "./profile.controller";
import { authMiddleware } from "../../middleware/auth.middleware";
import { UserRole } from "../../../prisma/generated/prisma/enums";

const router = Router();

// get Profile form DB
router.get("/me", authMiddleware.auth(UserRole.Admin, UserRole.Student, UserRole.Developer),  profileController.getProfile);


export const profileRouter = router;