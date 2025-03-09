import { Loader } from 'lucide-react';
import { Form, useNavigation } from 'react-router'
import { Button } from '~/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"

export default function EnrollSlice({ slice, price }: { slice: Slice, price: string }) {
    const navigation = useNavigation();
    const busy = navigation.formAction === `/courses/enroll/${slice}`;

    return (
        <>
            {price
                ? (
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant={"outline"} className="w-full border-b-2 py-6 text-sm font-bold uppercase rounded-lg hover:opacity-90">
                                Enroll now
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Enter voucher code</DialogTitle>
                                <DialogDescription>
                                    <p className='mb-2'>
                                        Enter a voucher code to enrroll for this course
                                    </p>

                                    <div className="border text-sm px-2.5 py-2 bg-sky-100 border-sky-600 text-sky-900 rounded-md">
                                        Send a message to the {" "}
                                        <a href="mailto:ernestharuna1@gmail.com" className='font-bold underline underline-offset-1'>administrator</a>{" "}
                                        to purchase a voucher code.
                                    </div>
                                </DialogDescription>
                            </DialogHeader>
                            <Form
                                action={`/courses/enroll/${slice.id}`}
                                method="POST"
                            >
                                <div className="pt-1 pb-4">
                                    <Label htmlFor="code" className="text-right">
                                        Enter code
                                    </Label>
                                    <Input id="code" name='code' placeholder='XXX-XXX-XXX' required />
                                </div>

                                <Button className='bg-primary-foreground text-secondary-auxiliary uppercase w-full disabled:cursor-not-allowed' disabled={busy}>
                                    {busy
                                        ? <Loader size={18} className='animate-spin' />
                                        : "Submit code"
                                    }
                                </Button>
                            </Form>
                        </DialogContent>
                    </Dialog >

                ) : (
                    <>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant={"outline"} className="w-full border-b-2 py-6 text-sm font-bold uppercase rounded-lg hover:opacity-90">
                                    Enroll now
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader className='text-left mb-4'>
                                    <DialogTitle>Are you sure?</DialogTitle>
                                    <DialogDescription>
                                        <p className='mb-2'>
                                            Enroll to <span className="font-semibold">{slice.title}</span> ?
                                        </p>

                                        <div className="border text-sm px-2.5 py-2 bg-sky-100 border-sky-600 text-sky-900 rounded-md">
                                            Ensure you have spoken with a mentor from OwenaHub before you enroll in this course. {" "}
                                            <br />
                                            <br />
                                            <a href="mailto:ernestharuna1@gmail.com" className='font-bold underline underline-offset-1'>Email mentor</a>{" "}
                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                                <Form
                                    action={`/courses/enroll/${slice.id}`}
                                    method="POST"
                                >
                                    <Button className='bg-primary-foreground text-secondary-auxiliary uppercase w-full disabled:cursor-not-allowed' disabled={busy}>
                                        {busy
                                            ? <Loader size={18} className='animate-spin' />
                                            : "Yes, Enroll"
                                        }
                                    </Button>
                                </Form>
                            </DialogContent>
                        </Dialog>
                    </>
                )
            }
        </>
    )
}
