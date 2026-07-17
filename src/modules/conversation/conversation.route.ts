import { Router } from "express";
import { conversationController } from "./conversation.controller";
import { authMiddleware } from "../../middleware/auth.middleware";
import { UserRole } from "../../../prisma/generated/prisma/enums";

const router = Router();

// create conversation
router.post(
    "/create-conversation", 
    authMiddleware.auth(UserRole.Developer, UserRole.Student),conversationController.createConversation
);

// get conversation
router.get(
    "/all-conversations", 
    authMiddleware.auth(UserRole.Developer, UserRole.Student),conversationController.getAllConversation
);

export const conversationRouter = router;