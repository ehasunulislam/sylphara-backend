import { MessageRole } from "../../../prisma/generated/prisma/enums";
import { openRouter } from "../../lib/openRouter";
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

    // Save USER message
    const userMessage = await prisma.message.create({
        data: {
            conversationId,
            content: message,
            role: MessageRole.USER
        }
    });

    // Get all messages of this conversation
    const messages = await prisma.message.findMany({
        where: {
            conversationId
        },
        orderBy: {
            createdAt: "asc"
        }
    });

    // Temporary Mock AI Response
    // const aiResponseText = `AI Response: ${message}`;

    // open router
    const formattedMessages = messages.map((msg) => ({
        role:
        msg.role === MessageRole.USER
            ? ("user" as const)
            : ("assistant" as const),
        content: msg.content,
    }));

    let aiResponseText = "";

    try{
        const response = await openRouter.chat.completions.create({
            model: "deepseek/deepseek-chat-v3",
            messages: formattedMessages
        });

        aiResponseText = response.choices[0]?.message?.content || "No response generate";
    }
    catch(err) {
        console.error("OpenRouter Error:", err);
        aiResponseText = "AI service is temporarily unavailable.";
    }

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