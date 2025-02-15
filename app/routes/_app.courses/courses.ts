import client from "~/lib/interceptor";

export async function getCreatedCourses() {
    const response = await client.get(`api/mentor/slices`);
    return response.data;
}

export async function getCourse(id: string) {
    const response = await client.get(`api/mentor/slices/${id}`);
    console.log(response);

    return response.data.slice;
}

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
