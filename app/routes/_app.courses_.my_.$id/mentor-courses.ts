import client from "~/lib/interceptor";


export async function getCourse(id: string) {
    const response = await client.get(`api/mentor/slices/${id}`);
    return response.data.slice;
};

export async function createBite(props: { [k: string]: FormDataEntryValue }) {
    const formData = new FormData();

    for (const key in props) formData.append(key, props[key]);

    const response = await client.post(`api/mentor/bites/${props.slice_id}/store`, formData);

    return response;
}

export async function getBites(slice_id: string) {
    const response = await client.get(`api/mentor/bites/${slice_id}`);
    return response.data;
}

export async function getBite(bite_id: string) {
    const response = await client.get(`api/mentor/bites/${bite_id}/edit`);
    return response.data;
}