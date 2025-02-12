import axios, { type AxiosError, type AxiosInstance } from "axios";
import { API_URL, BASE_URL } from "./utils";
import { toast } from "~/hooks/use-toast";
import { useNavigate } from "react-router";

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
            console.log(error);

            if (error.response?.status === 401) {
                const navigate = useNavigate();
                navigate("/");
            }

            if (error.response?.status === 500) {
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
            console.error(error);
        }
        throw error
    }
);

export default client