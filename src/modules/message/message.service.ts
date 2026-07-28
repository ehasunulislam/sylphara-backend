import { MessageRole } from "../../../prisma/generated/prisma/enums";
import { prisma } from "../../lib/prisma";
import { IMessage } from "./message.interface"

// create message 
const createMessageIntoDB = async(payload: IMessage) => {
    const { conversationId, content } = payload;

    const message = await prisma.message.create({
        data: {
            conversationId,
            content,
            role: MessageRole.USER
        }
    });

    return message;
}


// get message By Conversation Id && login user
const getMessagesFromDB = async(conversationId: string, userId: string) => {
    const conversation = await prisma.conversation.findUnique({
        where: {
            id: conversationId,
        },
    });

    if (!conversation) {
        throw new Error("Conversation not found");
    }

    if(conversation.userId !== userId) {
        throw new Error("Unauthorized");
    }

    const messages = await prisma.message.findMany({
        where: {
            conversationId,
        },
        orderBy: {
            createdAt: "asc",
        },
    });

    return messages;
} 


export const messageService = {
  createMessageIntoDB,
  getMessagesFromDB,
};