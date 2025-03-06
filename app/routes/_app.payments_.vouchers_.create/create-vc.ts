import client from "~/lib/interceptor";

export async function createVoucherCode(props: { [k: string]: FormDataEntryValue }) {
    return await client.post('/api/voucher-code', {
        issued_to: props.issued_to,
        code: props.code,
        price: props.price,
        expired_at: props.expires_at,
    });
}