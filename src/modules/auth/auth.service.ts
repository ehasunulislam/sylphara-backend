import config from "../../config";
import { prisma } from "../../lib/prisma"
import { IRegisterUser } from "./auth.interface"
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


export const authService = {
    createUserIntoDB
}