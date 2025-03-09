import client from "~/lib/interceptor";
import type { Route } from "../_app.payments/+types/route";
import { toast } from "sonner";

export async function clientAction({ params }: Route.ClientActionArgs) {
    const promise = new Promise(async (resolve, reject) => {
        try {
            await client.delete(`/api/voucher-codes/${params.id}`);
            resolve('Voucher code deleted');
        } catch (error) {
            reject(error);
        }
    });

    toast.promise(promise, {
        loading: 'Deleting code...',
        success: (message) => message as string,
        error: 'Error deleting code',
    });

    return null;
}
