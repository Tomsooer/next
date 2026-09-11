"use server";

import {IFormData} from "@/types/form-data";
import prisma from "@/utils/prisma"
import {saltAndHashPassword} from "@/utils/password";

export async function registerUser(formData: IFormData) {
    const {email, password, confirmPassword} = formData;

    if (password !== confirmPassword) {
        return { error: "Passwords don't match" }
    }

    if (password.length < 6) {
        return { error: "Password must be at least 6 characters long" }
    }

    try {
        const pwHash = await saltAndHashPassword(password)
        const user = await prisma.user.create({
            data: {
                email: email,
                password: pwHash
            }
        });


        console.log("user", user);

        return user;
    } catch (error) {
        console.error("Registration error", error);
        return {error: "Ошибка при регистрацыы"};
    }
}
