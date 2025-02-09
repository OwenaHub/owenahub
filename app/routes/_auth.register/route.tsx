import { BadgeCheck, BedDouble, Laptop } from "lucide-react";
import { Form, Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function Register() {
    return (
        <section className="container">
            <div className="max-w-fit mx-auto md:flex items-center gap-10 justify-center py-10">
                <div className="flex-1 hidden md:block">
                    <h1 className="pb-5 text-primary-foreground font-bold text-2xl mb-5">
                        Sign up for free, <br className="md:block hidden" />
                        unlimited practice!
                    </h1>
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-5">
                            <div className="bg-secondary outline outline-1 outline-secondary-foreground p-1 rounded-lg border-2 border-white">
                                <Laptop size="25" strokeWidth={"1.5"} className="text-secondary-foreground" />
                            </div>
                            <p className="text-sm">
                                Unlimited practice tests for free
                            </p>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="bg-secondary outline outline-1 outline-secondary-foreground p-1 rounded-lg border-2 border-white">
                                <BadgeCheck size="25" strokeWidth={"1.5"} className="text-secondary-foreground" />
                            </div>
                            <p className="text-sm">
                                Instant score estimate
                            </p>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="bg-secondary outline outline-1 outline-secondary-foreground p-1 rounded-lg border-2 border-white">
                                <BedDouble size="25" strokeWidth={"1.5"} className="text-secondary-foreground" />
                            </div>
                            <p className="text-sm">
                                Tips on preparing for the test
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
                        <Form>
                            <div className="mb-5">
                                <Input className="py-5" placeholder="Email address" />
                            </div>
                            <div className="mb-5">
                                <Input className="py-5" placeholder="Password" />
                            </div>
                            <div className="mt-7">
                                <Button className="py-5 w-full uppercase bg-primary-foreground text-secondary-auxiliary font-semibold">
                                    Register
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
