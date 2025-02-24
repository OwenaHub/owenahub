import { CheckCheck, Loader } from "lucide-react";
import { Form, Link, redirect, useNavigation, type MetaFunction } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import type { Route } from "../../+types/root";
import { toast } from "~/hooks/use-toast";
import registerUser from "./register";
import { ToastAction } from "~/components/ui/toast";
import InputError from "~/components/forms/input-error";

export const meta: MetaFunction = () => {
    return [
        { title: "Register | OwenaHub" },
        { name: "description", content: "The Learner's Hub" },
    ];
};

export async function clientAction({ request }: Route.ClientActionArgs) {
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);
    console.log(credentials);

    try {
        const res = await registerUser(credentials);
        console.log(res);
        toast({
            title: "Congratulations! ✨",
            description: "Your account has been registered, we hope you enjoy your experience",
            action: <ToastAction altText="Report issue">
                <Link to={"/account/general"}>Setup profile</Link>
            </ToastAction>,
        })
        return redirect('/dashboard');
    } catch ({ response }: any) {
        console.error(response)
        const error: any = response?.data?.errors;
        return error;
    }
}


export default function Register({ actionData }: Route.ComponentProps) {
    let errors = actionData;
    const { state } = useNavigation();
    const busy: boolean = state === "submitting" || state === "loading";

    return (
        <section className="container">
            <div className="max-w-fit mx-auto md:flex items-start gap-10 justify-center py-10">
                <div className="flex-1 hidden md:block">
                    <h1 className="pb-5 text-primary-foreground font-bold text-2xl my-5">
                        Sign up for free, <br className="md:block hidden" />
                        unlimited practice!
                    </h1>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <div className="bg-secondary outline-dotted outline-1 outline-offset-2 outline-secondary-foreground p-1 rounded-full border-2 border-white">
                                <CheckCheck size="25" strokeWidth={"1.5"} className="text-secondary-foreground" />
                            </div>
                            <p className="text-sm">
                                Unlimited access to free courses
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-secondary outline-dotted outline-1 outline-offset-2 outline-secondary-foreground p-1 rounded-full border-2 border-white">
                                <CheckCheck size="25" strokeWidth={"1.5"} className="text-secondary-foreground" />
                            </div>
                            <p className="text-sm">
                                Instant feedback on assignments
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-secondary outline-dotted outline-1 outline-offset-2 outline-secondary-foreground p-1 rounded-full border-2 border-white">
                                <CheckCheck size="25" strokeWidth={"1.5"} className="text-secondary-foreground" />
                            </div>
                            <p className="text-sm">
                                Expert tips to help you succeed
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="border rounded-xl py-6 px-5 md:px-8 h-full">
                        <div className="text-center pb-5 block md:hidden ">
                            <p className="font-bold text-primary-foreground text-2xl">
                                Create an acccount
                            </p>
                            <p className="text-muted-foreground text-sm">to access your free acount</p>
                        </div>
                        <Form method="POST">
                            <div className="mb-5">
                                <Input
                                    className="py-5"
                                    type="text"
                                    name="name"
                                    placeholder="Full name"
                                    autoFocus
                                    required
                                />
                                <InputError for="name" error={errors} />
                            </div>
                            <div className="mb-5">
                                <Input
                                    className="py-5"
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    required
                                />
                                <InputError for="email" error={errors} />
                            </div>
                            <div className="mb-5">
                                <Input
                                    className="py-5"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                                <InputError for="password" error={errors} />
                            </div>
                            <div className="mb-5">
                                <Input
                                    className="py-5"
                                    type="password"
                                    name="password_confirmation"
                                    placeholder="Confirm password"
                                    required
                                />
                            </div>
                            <div className="mt-7">
                                <Button
                                    className="py-5 w-full uppercase bg-primary-foreground text-secondary-auxiliary font-semibold"
                                    disabled={busy}
                                >
                                    {busy ? (<Loader className="animate-spin" />) : "Register"}
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

                        <p className="text-center text-xs p-4">
                            By continuing, you agree to our Terms and Privacy Policy.
                        </p>
                    </div>
                    <div className="text-foreground text-sm text-center py-5 font-semibold uppercase">
                        Have an account? <Link to="/login" className="text-primary-foreground">Log in</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
