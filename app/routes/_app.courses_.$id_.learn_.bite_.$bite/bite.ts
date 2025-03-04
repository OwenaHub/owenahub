import client from "~/lib/interceptor";

export async function createUserBite(props: { [k: string]: FormDataEntryValue }) {
    return client.post(`api/slices/enrolled/${props.bite_id}`, {
        completed: props.completed,
    });
}

export async function getBite(slice_id: string, bite_id: string) {
    const response = await client.get(
        `api/slices/enrolled/${slice_id}/bites/${bite_id}`
    );
    return response.data;
}
