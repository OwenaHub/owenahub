import client from "~/lib/interceptor";

export async function getVoucherCodes() {
    const response = await client.get('api/voucher-codes');
    return response.data.voucher_codes;
}