import { UserRole } from "../../prisma/generated/prisma/enums";
import { catchAsync } from "../utils/catchAsync";
import { NextFunction, Request, Response } from "express";
import { jwtUtils } from "../utils/jwtUtils";
import config from "../config";
import { JwtPayload } from "jsonwebtoken";
import { prisma } from "../lib/prisma";

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                name: string;
                email: string;
                role: UserRole
            }
        }
    }
};


const auth = (...requiredRoles: UserRole[]) => {
    return catchAsync(async(req: Request, res: Response, next: NextFunction) => {
        const token = req.cookies.aToken ?
                      req.cookies.aToken
                      :
                      req.headers.authorization?.startsWith("Bearer ")
                      ?
                      req.headers.authorization?.split(" ")[1]
                      :
                      req.headers.authorization;

        if(!token) {
            throw new Error("You are not looged in. Please log in to access this resource");
        }

        const verifiedToken = jwtUtils.verifyToken(token, config.jwt_access_secret);

        if(!verifiedToken.success) {
            throw new Error(verifiedToken.error);
        }

        const { id, name, email, role } = verifiedToken.data as JwtPayload;

        if(requiredRoles.length && !requiredRoles.includes(role as UserRole)) {
            throw new Error("Forbidden. You are not authorized to access this resource");
        }

        const user = await prisma.user.findUnique({
            where: {
                id, name, email, role
            }
        });

        if(!user) {
            throw new Error("User not found");
        }

        if(user.status === "BLOCKED") {
            throw new Error("You are blocked. please contact support")
        }

        req.user = user;
        next();
    })
};


export const authMiddleware = {
    auth
}