export async function singOutFunc() {
    try {
        const result = await signOut({ redirect: false })
        console.log("result", result);

        return result;
    } catch (error) {
        console.error("Authentication failed", error);
        throw error;
    }
}