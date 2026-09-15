"use server"

import { signIn } from '@/auth/auth';

export async function singInWithCredentials(email: string, password: string) {
    try {
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false
        });

        return result;
    } catch (error) {
        console.error("Registration error", error);
        throw error;
    }
}