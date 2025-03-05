import client from "~/lib/interceptor";

export async function getNotifications() {
    const response = await client.get('api/notifications');
    console.log(response);
    return response.data.notifications;
}