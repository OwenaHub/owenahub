import { Form, Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function Login() {
    return (
        <section className="container">
            <div className="max-w-fit mx-auto md:flex items-center gap-10 justify-center py-10">
                <div className="flex-1">
                    <div className="border rounded-xl py-6 px-5 md:px-8 h-full">
                        <div className="text-center pb-5">
                            <p className="font-bold text-primary-foreground text-2xl">
                                Log in to your account
                            </p>
                        </div>
                        <Form>
                            <div className="mb-5">
                                <Label className="text-xs pb-1">Email address</Label>
                                <Input className="py-5" placeholder="Email address" />
                            </div>
                            <div className="mb-5">
                                <div className="flex items-center justify-between pb-1">
                                    <Label className="text-xs">Password</Label>
                                    <Link to="/forgot-password" className="text-xs text-primary-foreground underline">
                                        Forgot password?
                                    </Link>
                                </div>
                                <Input className="py-5" placeholder="Password" />
                            </div>
                            <div className="mt-7">
                                <Button className="py-5 w-full uppercase bg-primary-foreground text-secondary-auxiliary font-semibold">
                                    Log in
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
                        Need an account? <Link to="/register" className="text-primary-foreground">sign up</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
