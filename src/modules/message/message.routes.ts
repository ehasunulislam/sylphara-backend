import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware";
import { messageController } from "./message.controller";
import { UserRole } from "../../../prisma/generated/prisma/enums";

const router = Router();

// create message 
// router.post(
//   "/create-message",
//   authMiddleware.auth(UserRole.Developer, UserRole.Student),
//   messageController.createMessage
// );

// get message By Conversation Id && login user
router.get(
    "/:conversationId",
    authMiddleware.auth(UserRole.Developer, UserRole.Student),
    messageController.getMessages
);

export const messageRoutes = router;