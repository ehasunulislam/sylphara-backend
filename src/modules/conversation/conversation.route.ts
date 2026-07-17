import { Router } from "express";
import { conversationController } from "./conversation.controller";
import { authMiddleware } from "../../middleware/auth.middleware";
import { UserRole } from "../../../prisma/generated/prisma/enums";

const router = Router();

// create conversation
router.post(
    "/create-conversation", 
    authMiddleware.auth(UserRole.Developer, UserRole.Student),
    conversationController.createConversation
);

// get conversation with login user
router.get(
    "/all-conversations", 
    authMiddleware.auth(UserRole.Developer, UserRole.Student),
    conversationController.getAllConversation
);


// get conversation with id && login user
router.get(
    "/:id", 
    authMiddleware.auth(UserRole.Developer, UserRole.Student),
    conversationController.getConversationById
);


export const conversationRouter = router;