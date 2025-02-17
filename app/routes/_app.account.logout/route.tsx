import { redirect } from "react-router";
import client from "~/lib/interceptor";
import type { Route } from "../_app.account/+types/route";
import { toast } from "~/hooks/use-toast";

export async function clientAction({ }: Route.ClientActionArgs) {
    await client.post('/api/logout');
    toast({
        variant: 'default',
        title: 'You logged out',
        description: 'You have been successfully logged out of OwenaHub'
    });
    return redirect('/login');
}