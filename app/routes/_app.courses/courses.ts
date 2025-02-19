import client from "~/lib/interceptor";

export async function getCourses() {
    const response = await client.get(`api/slices`);
    return response.data.slices;
}

export async function getEnrolledCourses() {
    const response = await client.get(`api/slices/enrolled`);
    return response.data.enrolled_slices;
}

export async function getCourse(id: string) {
    const response = await client.get(`api/slices/${id}/overview`);
    return response.data;
}

export async function getEnrolledCourse(slice_id: string, bite_id: string) {
    const response = await client.get(
        `api/slices/enrolled/${slice_id}/bite/${bite_id}`
    );
    return response.data;
}

