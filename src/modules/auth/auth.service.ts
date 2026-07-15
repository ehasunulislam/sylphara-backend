import { SignOptions } from "jsonwebtoken";
import config from "../../config";
import { prisma } from "../../lib/prisma"
import { jwtUtils } from "../../utils/jwtUtils";
import { ILoginUser, IRegisterUser } from "./auth.interface"
import bcrypt from "bcryptjs";

// create user
const createUserIntoDB = async(payload: IRegisterUser) => {
    const { name, email, password, profilePhoto, role, status } = payload;

    const isExistingUser = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if(isExistingUser) {
        throw new Error("User already exists");
    }


    const hashedPassword = await bcrypt.hash(
        password,
        Number(config.bcrypt_salt_rounds)
    );

    const user = await prisma.$transaction(async(tx) => {
        const createdUser = await tx.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                profilePhoto,
                role,
                status,

                profile: {
                    create: { }
                }
            }
        });

        const result = await tx.user.findUnique({
            where: {
                id: createdUser.id,
                email: createdUser.email,
            },
            omit: {
                password: true
            },
            include: {
                profile: true
            }
        })

        return result;
    })
    return user;
};


// Login user 
const loginUserFromDB = async(payload: ILoginUser) => {
    const {email, password} = payload;

    const user = await prisma.user.findUniqueOrThrow({
        where: {
            email
        }
    });

    if(user.status === "BLOCKED") {
        throw new Error("you are blocked. please contact support");
    }

    const isPassword = bcrypt.compare(password, user.password);

    if(!isPassword) {
        throw new Error("password is incorrecy");
    }

    const jwtPayload = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    }

    const accessToken = jwtUtils.createToken(
        jwtPayload,
        config.jwt_access_secret,
        config.jwt_access_expires_in as SignOptions
    );

    const refreshToken = jwtUtils.createToken(
        jwtPayload,
        config.jwt_refresh_secret,
        config.jwt_refresh_expires_in as SignOptions
    );

    return {
        accessToken,
        refreshToken
    }
}



export const authService = {
    createUserIntoDB,
    loginUserFromDB
}