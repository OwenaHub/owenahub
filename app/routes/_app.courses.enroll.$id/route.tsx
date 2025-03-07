import { toast } from "~/hooks/use-toast";
import client from "~/lib/interceptor";
import type { Route } from "../_app.courses/+types/route";
import { redirect } from "react-router";

export async function clientAction({ params, request }: Route.ClientActionArgs) {
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);

    try {
        await client.post(`/api/slices/enroll/${params.id}`, {
            code: credentials.code,
        });

        toast({
            variant: 'default',
            title: 'Enrollment successful',
            description: 'You have successfully enrolled in this course.'
        })
        return redirect(`/courses/${params.id}/learn`);
    } catch ({ response: { data } }: any) {
        toast({
            variant: 'destructive',
            title: 'Oops! Something went wrong',
            description: data.message || "Try again, contact support@owenahub.com if this persists"
        });
        return redirect(`/courses/${params.id}`)
    }
}