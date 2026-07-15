import { RequestHandler, Request, Response, NextFunction } from "express";

export const catchAsync = (fn: RequestHandler) => {
    return async(req: Request, res: Response, next: NextFunction) => {
        try{
            await fn(req, res, next)
        }
        catch(err) {
            next(err)  //-> global error (coming from app.ts)
        }
    }
}