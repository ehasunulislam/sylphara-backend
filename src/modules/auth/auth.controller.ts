import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { authService } from "./auth.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

// create user
const createUser = catchAsync(async(req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;

    const createdUser = await authService.createUserIntoDB(payload);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "User registered successfully",
      data: {
        createdUser
      },
    })
});


// Login user 
const loginUser = catchAsync(async(req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;

    const { accessToken, refreshToken } = await authService.loginUserFromDB(payload);

    res.cookie("aToken", accessToken, {
        httpOnly: true,
        secure: false,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24  // 1 day
    });

    res.cookie("rToken", refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    });

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "User loggedIn successfully",
      data: {
        accessToken, 
        refreshToken
      },
    })
});


// giving a new refresh token 
const refreshToken = catchAsync(async(req: Request, res: Response, next: NextFunction) => {
  const refreshToken = req.cookies.rToken;

  const { accessToken } = await authService.refreshToken(refreshToken);

  res.cookie("my-token", accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
    maxAge: 10000 * 60 * 60 * 24
  });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Token Refresh successfully",
    data: {
      accessToken
    }
  })
})


export const auhtController = {
    createUser,
    loginUser,
    refreshToken
}