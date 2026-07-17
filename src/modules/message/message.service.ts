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


export const messageService = {
  createMessageIntoDB,
};