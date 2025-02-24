import client from "~/lib/interceptor";

export async function createCourse(props: { [k: string]: FormDataEntryValue }) {
    const formData = new FormData();

    for (const key in props) {
        formData.append(key, props[key]);
    }

    if (props.image_path instanceof File)
        formData.append("image_path", props.image_path);


    const response = await client.post(`api/mentor/slices/store`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });

    return response;
}

export async function getCourses() {
    const response = await client.get(`api/mentor/slices`);
    return response.data.slices;
};

export async function getCourse(id: string) {
    const response = await client.get(`api/mentor/slices/${id}`);
    return response.data.slice;
};

export async function createBite(props: { [k: string]: FormDataEntryValue }) {
    const formData = new FormData();

    for (const key in props) formData.append(key, props[key]);

    const response = await client.post(`api/mentor/slices/bites/${props.slice_id}/store`, formData);

    return response;
}

export async function getCreatedCourses() {
    const response = await client.get(`api/mentor/slices`);
    return response.data.slices;
}

export async function getBites(slice_id: string) {
    const response = await client.get(`api/mentor/slices/bites/${slice_id}`);
    return response.data;
}

export async function getBite(bite_id: string) {
    const response = await client.get(`api/mentor/slices/bites/${bite_id}/edit`);
    return response.data;
}

export async function editBite(props: { [k: string]: FormDataEntryValue }) {
    let formData = {
        title: props.title,
        description: props.description,
        position: props.position,
        content: props.content,
    }
    const response = await client.patch(`api/mentor/slices/bites/${props.bite_id}/update`, formData);

    return response;
}

