import { Router } from "express";
import { adminController } from "./admin.controller";
import { authMiddleware } from "../../middleware/auth.middleware";
import { UserRole } from "../../../prisma/generated/prisma/enums";

const router = Router();

// get all user route
 router.get(
    "/all-users", 
    authMiddleware.auth(UserRole.Admin),
    adminController.getAllUser
)

export const   adminRouter = router;