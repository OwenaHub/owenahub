import { Form, Link, redirect, useNavigation, type MetaFunction } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import type { Route } from "../../+types/root";
import loginUser from "./login";
import { toast } from "~/hooks/use-toast";
import { Loader } from "lucide-react";
import InputError from "~/components/forms/input-error";
import useSession from "~/lib/session";

export const meta: MetaFunction = () => {
    return [
        { title: "Login | OwenaHub" },
        { name: "description", content: "The Learner's Hub" },
    ];
};

export async function clientAction({ request }: Route.ClientActionArgs) {
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);

    const { getIntentedRoute } = useSession();
    let route = (await getIntentedRoute());

    try {
        await loginUser(credentials);
        toast({ description: "Welcome back!" });
        return redirect(route);
    } catch ({ response }: any) {
        const error: any = response?.data?.errors;
        return error;
    }
}

export default function Login({ actionData }: Route.ComponentProps) {
    const errors = actionData;

    const { state } = useNavigation();
    const busy: boolean = state === "submitting" || state === "loading";

    return (
        <section className="container animated fadeIn">
            <div className="max-w-sm mx-auto md:flex items-center gap-10 justify-center py-10">
                <div className="flex-1">
                    <div className="border rounded-xl py-6 px-5 md:px-8 h-full">
                        <div className="text-center pb-5">
                            <p className="font-bold text-primary-foreground text-2xl">
                                Log in to your account
                            </p>
                        </div>
                        <Form method="POST">
                            <div className="mb-5">
                                <Label className="text-xs pb-1">Email address</Label>
                                <Input
                                    className="py-5"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="m@example.com"
                                    required
                                    autoFocus
                                />
                                <InputError for="email" error={errors} />
                            </div>
                            <div className="mb-5">
                                <div className="flex items-center justify-between pb-1">
                                    <Label className="text-xs">Password</Label>
                                    <Link to="/forgot-password" className="text-xs text-primary-foreground underline">
                                        Forgot password?
                                    </Link>
                                </div>
                                <Input
                                    className="py-5"
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <div className="mt-7">
                                <Button
                                    disabled={busy}
                                    className="py-5 w-full uppercase bg-primary-foreground text-secondary-auxiliary font-semibold"
                                >
                                    {busy ? (<Loader className="animate-spin" />) : "Login"}
                                </Button>
                            </div>
                        </Form>


                        <div className="flex items-center py-5">
                            <div className="border-t flex-1" />
                            <div className="mx-4 text-xs text-gray-400 font-bold">OR</div>
                            <div className="border-t flex-1" />
                        </div>

                        <Button variant={"outline"} className="flex items-center gap-2 w-full p-5">
                            <img src="/images/logos/google.png" alt="..." width="18" />
                            <span className="text-secondary-foreground font-bold">Sign up with Google</span>
                        </Button>

                        <div className="flex flex-col gap-3">
                            <p className="text-center text-xs p-5 text-pretty">
                                By continuing, you agree to our {" "}
                                <Link to="#" target="_blank" data-bypass>Terms</Link>
                                {" "}and{" "}
                                <Link to="/privacy" target="_blank">Privacy Policy</Link>.
                            </p>
                        </div>
                    </div>
                    <div className="text-foreground text-sm text-center py-5 font-semibold uppercase">
                        Need an account? <Link to="/register" className="text-primary-foreground" viewTransition>sign up</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
