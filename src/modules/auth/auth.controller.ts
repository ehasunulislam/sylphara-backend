import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { authService } from "./auth.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

// create user
const createUser = catchAsync(async(req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;

    const user = await authService.createUserIntoDB(payload);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "User registered successfully",
      data: {
        user
      },
    })
});


export const auhtController = {
    createUser
}