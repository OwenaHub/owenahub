import client from "~/lib/interceptor";

export async function getBites(slice_id: string) {
    const response = await client.get(
        `api/slices/enrolled/${slice_id}/bites`
    );
    
    return response.data;
}