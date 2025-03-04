import client from "~/lib/interceptor";

export async function getCourses() {
    const response = await client.get(`api/slices`);
    return response.data.slices;
}

export async function getEnrolledCourses() {
    const response = await client.get(`api/slices/enrolled`);
    return response.data.enrolled_slices;
}