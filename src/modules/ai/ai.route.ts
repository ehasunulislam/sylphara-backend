import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware";
import { UserRole } from "../../../prisma/generated/prisma/enums";
import { aiController } from "./ai.controller";

const router = Router();

router.post(
    "/chat",
    authMiddleware.auth(
        UserRole.Developer,
        UserRole.Student
    ),
    aiController.chatWithAI
)


export const aiRouter = router;