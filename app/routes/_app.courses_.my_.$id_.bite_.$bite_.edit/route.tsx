import { ChevronLeft, Loader } from 'lucide-react'
import { useState } from 'react'
import { Form, Link, redirect, useNavigate, useNavigation } from 'react-router'
import { TextEditor } from '~/components/custom/quill.client'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import type { Route } from '../_app.courses_.my_.$id/+types/route'
import { editBite, getBite } from '../_app.courses_.my_.$id/mentor-courses'
import { toast } from '~/hooks/use-toast'
import InputError from '~/components/forms/input-error'

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    try {
        if (!params.bite) throw new Error("Bad Request")
        const bite = await getBite(params.bite);
        return { bite };
    } catch ({ response }: any) {
        return redirect('/courses')
    }
}

export async function clientAction({ params, request }: Route.ClientActionArgs) {
    const formData = Object.fromEntries(await request.formData());
    try {
        await editBite(formData);
        toast({
            variant: 'default',
            description: 'Bite edited!'
        })
        return redirect(`/courses/my/${params.id}`)
    } catch ({ response }: any) {
        const error: any = response?.data?.errors;
        return error;
    }
}

export default function EditBite({ actionData, loaderData }: Route.ComponentProps) {
    const errors = actionData;
    const { bite }: any = loaderData;

    const [content, setContent] = useState(bite.content);
    const navigate = useNavigate();

    const { state } = useNavigation();
    const busy: boolean = state === "submitting" || state === "loading";


    return (
        <section className="md:px-10 my-10">
            <div className="md:mt-20">
                <div className="mb-4">
                    <Link to={"#"} onClick={() => navigate(-1)}
                        className="flex gap-1 text-xs items-center uppercase hover:underline hover:underline-offset-2">
                        <ChevronLeft size={18} strokeWidth={2} /> <span>Back</span>
                    </Link>
                </div>
                <div className='mb-8'>
                    <h1 className='text-secondary-foreground text-2xl font-bold'>Edit bite: {bite?.title}</h1>
                    <p>
                        Make changes to your profile here. Click save when you're done.
                    </p>
                </div>
                <Form method="POST">
                    <input type="hidden" name="bite_id" value={bite?.id} />
                    <input type="hidden" name="request_type" value="EDIT" />
                    <div className="mb-2">
                        <Label>Bite position</Label>
                        <Input
                            type="number"
                            name="position"
                            defaultValue={bite?.position}
                        />
                        <InputError error={errors} for='position' />
                    </div>
                    <div className="mb-2">
                        <Label>Title</Label>
                        <Input
                            type="text"
                            name="title"
                            defaultValue={bite?.title}
                        />
                        <InputError error={errors} for='title' />

                    </div>
                    <div className="mb-2">
                        <Label>Description</Label>
                        <Textarea
                            name="description"
                            defaultValue={bite?.description}
                        />
                        <InputError error={errors} for='description' />

                    </div>
                    <div className="mb-5">
                        <Label>Content</Label>
                        <div className="border rounded-lg bg-white">
                            <TextEditor
                                theme="snow"
                                placeholder="Write description"
                                onChange={setContent}
                                value={content}
                            />
                        </div>
                        <input type="hidden" name="content" value={content} />
                        <InputError error={errors} for='content' />

                    </div>
                    <div>
                        <Button type="submit" disabled={busy}>
                            {busy ? (<Loader className="animate-spin" />) : "Create bite"}
                        </Button>
                    </div>
                </Form>
            </div>
        </section >
    )
}
