import client from "~/lib/interceptor";

export async function getCreatedCourses() {
    const response = await client.get(`api/mentor/slices`);
    return response.data.slices;
}