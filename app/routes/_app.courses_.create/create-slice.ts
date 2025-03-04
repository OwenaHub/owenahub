import client from "~/lib/interceptor";

export async function createSlice(props: { [k: string]: FormDataEntryValue }) {
    const formData = new FormData();

    for (const key in props) {
        formData.append(key, props[key]);
    }

    if (props.image_path instanceof File)
        formData.append("image_path", props.image_path);


    const response = await client.post(`api/mentor/slices`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });

    return response;
}