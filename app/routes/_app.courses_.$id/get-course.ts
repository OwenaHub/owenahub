import client from "~/lib/interceptor";

export async function getCourse(id: string) {
    const response = await client.get(`api/slices/${id}/overview`);
    return response.data;
}