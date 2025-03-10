import client from "~/lib/interceptor";
import type { Route } from "../_app.account/+types/route";
import { toast } from "sonner";

export async function clientAction({ params }: Route.ClientActionArgs) {
    const promise = new Promise(async (resolve, reject) => {
        try {
            await client.delete(`/api/mentor/bites/${params.id}/delete`);
            resolve('Bite deleted successfully');
        } catch (error) {
            reject(error);
        }
    });

    toast.promise(promise, {
        loading: 'Deleting bite...',
        success: (message) => message as string,
        error: 'Error deleting bite',
    });

    return null;
}
