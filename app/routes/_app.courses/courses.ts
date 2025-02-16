import client from "~/lib/interceptor";

export async function getCourses() {
    const response = await client.get(`api/slices`);
    return response.data.slices;
}

export async function getEnrolledCourses() {
    const response = await client.get(`api/slices/enrolled`);
    console.log(response.data.enrolled_slices)
    return response.data.enrolled_slices;
}

export async function getCourse(id: string) {
    const response = await client.get(`api/slices/${id}/overview`);
    return response.data;
}

