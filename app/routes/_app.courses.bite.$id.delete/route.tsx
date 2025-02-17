import { redirect } from "react-router";
import client from "~/lib/interceptor";
import type { Route } from "../_app.account/+types/route";
import { toast } from "~/hooks/use-toast";

export async function clientAction({ params }: Route.ClientActionArgs) {
    await client.post(`/api/mentor/slices/bites/${params.id}/delete`);
    toast({
        variant: 'destructive',
        description: 'Bite deleted!'
    });
    return null;
}