import axios, { type AxiosError, type AxiosInstance } from "axios";
import { API_URL, BASE_URL } from "./utils";
import { toast } from "~/hooks/use-toast";

const client: AxiosInstance = axios.create({
    baseURL: `${API_URL}`,
    withCredentials: true,
    withXSRFToken: true,
});

client.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers['X-Referer'] = BASE_URL;
    }
    return config;
});

client.interceptors.response.use((response) => response,
    async (error: AxiosError) => {
        try {
            if (import.meta.env.DEV) console.log(error);


            if (error.response?.status === 500) {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "It's not you, it's us — If this persists contact support@kribb.ng",
                })
            }

            if (error.response?.status === 419) {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "It's not you, it's us — If this persists contact support@kribb.ng",
                })
            }

            if (error.code === "ERR_NETWORK") {
                toast({
                    variant: "destructive",
                    title: "No internet connection",
                    description: "Please check your connection and try again",
                });
            }
        } catch (error) {
            if (import.meta.env.DEV) console.log(error);
        }
        throw error
    }
);

export default client