import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware";
import { messageController } from "./message.controller";
import { UserRole } from "../../../prisma/generated/prisma/enums";

const router = Router();

// create message 
router.post(
  "/create-message",
  authMiddleware.auth(UserRole.Developer, UserRole.Student),
  messageController.createMessage
);

export const messageRoutes = router;