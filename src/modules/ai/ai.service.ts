import { MessageRole } from "../../../prisma/generated/prisma/enums";
import { prisma } from "../../lib/prisma";
import { IChat } from "./ai.interface";


// create ai chat
const createChatWithAIIntoDB = async(payload: IChat, userId: string) => {
    const { conversationId, message } = payload;

    const conversation = await prisma.conversation.findUnique({
        where: {
            id: conversationId
        }
    });


    if (!conversation) {
        throw new Error("Conversation not found");
    }

    if (conversation.userId !== userId) {
        throw new Error("Unauthorized");
    }

    const userMessage = await prisma.message.create({
        data: {
            conversationId,
            content: message,
            role: MessageRole.USER
        }
    });

    const messages = await prisma.message.findMany({
        where: {
            conversationId
        },
        orderBy: {
            createdAt: "asc"
        }
    });

    // Temporary Mock AI Response
    const aiResponseText = `AI Response: ${message}`;

    const assistantMessage = await prisma.message.create({
        data: {
            conversationId,
            content: aiResponseText,
            role: MessageRole.ASSISTANT
        }
    });

    return {
        conversationId,
        userMessage,
        assistantMessage,
        historyCount: messages.length,
    };
}



export const aiService = {
  createChatWithAIIntoDB,
};