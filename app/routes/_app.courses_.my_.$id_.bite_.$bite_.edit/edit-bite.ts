import client from "~/lib/interceptor";

export async function editBite(props: { [k: string]: FormDataEntryValue }) {
    let formData = {
        title: props.title,
        description: props.description,
        position: props.position,
        content: props.content,
    }
    const response = await client.patch(`api/mentor/bites/${props.bite_id}/update`, formData);

    return response;
}
