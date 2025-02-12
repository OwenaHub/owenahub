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

    return { validateSession };
}