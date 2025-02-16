import client from "~/lib/interceptor";

export default function useSession() {

    async function validateSession() {
        try {
            const response = await client.get(`api/user`);
            return response?.data;
        } catch (error) {
            throw error;
        }
    }

    async function getUserType() {
        try {
            const user = await validateSession();
            return user.account_type; // Assuming the role is in `user.role`
        } catch (error) {
            throw error;
        }
    }

    return { validateSession, getUserType };
}