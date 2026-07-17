import { catchAsync } from "../../utils/catchAsync";
import { NextFunction, Request, Response } from "express";
import { conversationService } from "./conversation.service";
import { sendResponse } from "../../utils/sendResponse";

// create conversation
const createConversation = catchAsync(async(req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;
    const id = req.user?.id as string;

    const createdConversation = await conversationService.createConversationIntoDB(payload, id);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Conversation created successfully",
        data: {
            createdConversation
        },
    });
});


// get all conversation with login user
const getAllConversation  = catchAsync(async(req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.id as string;

    const getConversations = await conversationService.getAllConversationFromDB(
        userId
    );

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Conversations retrieved successfully",
        data: {
            getConversations
        },
    });
});


// get conversation with id && login user
const getConversationById  = catchAsync(async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id as string;
    const userId = req.user?.id as string;

    const conversationById = await conversationService.getConversationByIdFromDB(userId, id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Conversations retrieved with id and userId successfully",
        data: {
            conversationById
        },
    });
})

export const conversationController = {
    createConversation,
    getAllConversation,
    getConversationById
}