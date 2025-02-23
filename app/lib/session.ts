import client from "~/lib/interceptor";
import { storageKeys } from "./keys";

export default function useSession() {

    async function validateSession() {
        try {
            const response = await client.get(`api/user`);
            storeUser(response?.data);
            return response?.data;
        } catch (error) {
            throw error;
        }
    }

    async function getUserType() {
        try {
            const user = await getUser();
            return user.account_type;

        } catch (error) {
            throw error;
        }
    }

    async function storeUser(user: User) {
        try {
            let data = JSON.stringify(user)
            localStorage.setItem(storageKeys.user, data)
        } catch (error) {
            throw error;
        }
    }

    async function getUser() {
        try {
            let data = localStorage.getItem(storageKeys.user);
            const user = data ? JSON.parse(data) : null;
            return user;
        } catch (error) {
            throw error;
        }
    }

    return { validateSession, getUserType };
}