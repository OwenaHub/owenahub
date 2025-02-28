import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Form, redirect } from "react-router";
import type { Route } from "../_app.courses/+types/route";
import { toast } from "~/hooks/use-toast";
import InputError from "~/components/forms/input-error";
import { createCourse } from "../_app.courses_.my_.$id/mentor-courses";
import { useState } from "react";
import { TextEditor } from "~/components/custom/quill.client";

export async function clientAction({ request }: Route.ClientActionArgs) {
    const formData = Object.fromEntries(await request.formData());

    try {
        await createCourse(formData);
        toast({
            variant: 'default',
            description: 'Slice created successfully!'
        })
        return redirect('/courses')
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
    const [overview, setOverview] = useState("");

    return (
        <section className="md:px-10 my-10 animated fadeIn">
            <section>
                <div className="md:mt-20 flex justify-between items-center">
                    <h1 className="text-xl md:text-2xl text-primary-foreground font-bold">
                        New course
                    </h1>
                </div>
                <p className="py-7 text-sm text-gray-500 ">
                    You aren't enrolled in any courses
                </p>
            </section>
            <hr className="my-10" />

            <section>
                <Form encType="multipart/form-data" method="POST" className="rounded-xl shadow bg-gray-50 px-2 md:px-8 py-4">
                    <div className="mb-5">
                        <Label htmlFor="title">Course title</Label>
                        <Input className="bg-white" id="title" type="text" name="title" required />
                        <InputError for="title" error={errors} />
                    </div>
                    <div className="mb-5">
                        <Label htmlFor="about">Short summary</Label>
                        <Input className="bg-white" id="about" type="text" name="about" required />
                        <InputError for="about" error={errors} />
                    </div>
                    <div className="mb-5">

                        <Label>Course overview</Label>
                        <div className="border rounded-lg bg-white">
                            <TextEditor
                                theme="snow"
                                placeholder="Write description"
                                onChange={setOverview}
                                value={overview}
                            />
                        </div>
                        <InputError for="overview" error={errors} />
                        <input type="hidden" name="overview" value={overview} />
                    </div>
                    <div className="mb-5">
                        <Label htmlFor="start_date">Start date</Label>
                        <Input className="bg-white" type="date" id="start_date" name="start_date" required />
                        <InputError for="date" error={errors} />
                    </div>
                    <div className="mb-5">
                        <Label htmlFor="duration">Course duration (in weeks)</Label>
                        <Input className="bg-white" type="number" placeholder="3 weeks" id="duration" name="duration" required />
                        <InputError for="duration" error={errors} />
                    </div>
                    <div className="mb-5">
                        <Label htmlFor="tags">Tags</Label>
                        <Input className="bg-white" type="text" id="tags" name="tags" required />
                        <InputError for="tags" error={errors} />
                    </div>
                    <div className="mb-5">
                        <Label htmlFor="price">Price (optional)</Label>
                        <Input className="bg-white" type="number" id="price" name="price" />
                        <InputError for="price" error={errors} />
                    </div>
                    <div className="mb-5">
                        <Label htmlFor="image_path">Banner image</Label>
                        <Input className="bg-white" type="file" id="image_path" name="image_path" />
                        <InputError for="image_path" error={errors} />
                    </div>
                    <Button className="mb-5 w-full uppercase font-bold">Create Slice</Button>
                </Form>
            </section>
        </section>
    );
}
