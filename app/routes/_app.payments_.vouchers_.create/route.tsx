import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Form, redirect } from "react-router";
import type { Route } from "../_app.courses/+types/route";
import { toast } from "~/hooks/use-toast";
import InputError from "~/components/forms/input-error";
import { Link } from "react-router";
import { ChevronLeft } from "lucide-react";
import { createVoucherCode } from "./create-vc";

export async function clientAction({ request }: Route.ClientActionArgs) {
    const formData = Object.fromEntries(await request.formData());
    console.log(formData);

    try {
        await createVoucherCode(formData);
        toast({
            variant: 'default',
            title: 'Code created!',
            description: 'New voucher code created successfully'
        })
        return redirect('/payments')
    } catch ({ response }: any) {
        toast({
            variant: 'destructive',
            description: 'Something went wrong!'
        });
        const error: any = response?.data?.errors;
        return error;
    }
}

export default function CreateCourse({ actionData }: Route.ComponentProps) {
    const errors = actionData;

    return (
        <section className="md:px-10 my-10 animated fadeIn">
            <section>
                <div className="md:mt-20">
                    <div className="mb-6">
                        <Link to="/payments" className="flex gap-1 text-xs items-center uppercase hover:underline hover:underline-offset-2">
                            <ChevronLeft size={18} strokeWidth={2} /> <span>Back</span>
                        </Link>
                    </div>
                    <h1 className="text-xl md:text-2xl text-primary-foreground font-bold">
                        Create a voucher code
                    </h1>
                </div>
                <p className="pt-3 pb-7 text-sm text-gray-500 ">
                    This code can be used for in-app purchases.
                </p>
            </section>
            <section>
                <Form encType="multipart/form-data" method="POST" className="rounded-xl shadow bg-gray-50 px-2 md:px-8 py-4">
                    <div className="mb-5">
                        <Label htmlFor="issued_to">Issued to</Label>
                        <Input
                            className="bg-white"
                            id="issued_to"
                            type="email"
                            name="issued_to"
                            placeholder="user@email.com"
                        />
                        <InputError for="issued_to" error={errors} />
                    </div>
                    <div className="mb-5">
                        <Label htmlFor="code">Voucher code</Label>
                        <Input
                            className="bg-white"
                            id="code"
                            type="text"
                            name="code"
                            required
                        />
                        <InputError for="code" error={errors} />
                    </div>
                    <div className="mb-5">
                        <Label htmlFor="price">Attached price</Label>
                        <Input
                            className="bg-white"
                            type="number"
                            id="price"
                            name="price"
                            required
                        />
                        <InputError for="price" error={errors} />
                    </div>
                    <div className="mb-5">
                        <Label htmlFor="expires_at">Code expiry</Label>
                        <Input
                            className="bg-white"
                            type="date"
                            id="expires_at"
                            name="expires_at"
                            required
                        />
                        <InputError for="price" error={errors} />
                    </div>
                    <div className="flex items-center pt-4 justify-between text-sm">
                        <Button variant={"outline"} type="reset" className="px-6  mb-5 w-max uppercase">
                            reset
                        </Button>
                        <Button type="submit" className="px-6  mb-5 w-max uppercase">
                            Create voucher code
                        </Button>
                    </div>
                </Form>
            </section>
        </section>
    );
}
