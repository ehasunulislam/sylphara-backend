import { catchAsync } from "../../utils/catchAsync";
import { NextFunction, Request, Response } from "express";
import { messageService } from "./message.service";
import { sendResponse } from "../../utils/sendResponse";

// create message 
const createMessage = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;

    const messageCreated = await messageService.createMessageIntoDB(payload);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Message created successfully",
      data: {
        messageCreated
      },
    });
  }
);


export const messageController = {
  createMessage,
};