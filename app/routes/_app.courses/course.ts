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

export async function getBites(slice_id: string) {
    const response = await client.get(
        `api/slices/enrolled/${slice_id}/bites`
    );
    return response.data;
}

export async function getBite(slice_id: string, bite_id: string) {
    const response = await client.get(
        `api/slices/enrolled/${slice_id}/bites/${bite_id}`
    );
    console.log(response.data)
    return response.data;
}

export async function createUserBite(props: { [k: string]: FormDataEntryValue }) {
    return client.post(`api/slices/enrolled/${props.bite_id}`, {
        completed: props.completed,
    });
}

