import { toast } from "~/hooks/use-toast";
import client from "~/lib/interceptor";
import type { Route } from "../_app.courses/+types/route";
import { redirect } from "react-router";

export async function clientAction({ params }: Route.ClientActionArgs) {
    try {
        await client.post(`/api/slices/enroll/${params.id}`);
        toast({
            variant: 'default',
            title: 'Enrollment successful',
            description: 'You have successfully enrolled in this course.'
        })
        return redirect('/courses')
    } catch (error) {
        toast({
            variant: 'destructive',
            description: 'An error occurred, please try again.'
        })
    }
}