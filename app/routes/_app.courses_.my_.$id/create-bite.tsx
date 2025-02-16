import { Loader } from "lucide-react"
import { Form, useNavigation } from "react-router"
import { Button } from "~/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Textarea } from "~/components/ui/textarea"

export function CreateBite({ slice, error }: { slice: Slice, error?: string }) {
    const { state } = useNavigation();
    const busy: boolean = state === "submitting" || state === "loading";

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="rounded-lg uppercase text-xs">New bite</Button>
            </DialogTrigger>
            <DialogContent
                className="sm:max-w-[425px]"
                onInteractOutside={(e) => e.preventDefault()}
            >
                <DialogHeader>
                    <DialogTitle>Create new bite</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <Form method="POST">
                    <input type="hidden" name="slice_id" value={slice.id} />
                    <div className="mb-2">
                        <Label>Bite position</Label>
                        <Input
                            type="number"
                            name="position"
                        />
                    </div>
                    <div className="mb-2">
                        <Label>Title</Label>
                        <Input
                            type="text"
                            name="title"
                            placeholder="Introduction: Setting your environment"
                        />
                    </div>
                    <div className="mb-2">
                        <Label>Description</Label>
                        <Input
                            type="text"
                            name="description"
                            placeholder="Getting to know the impoeing process"
                        />
                    </div>
                    <div className="mb-5">
                        <Label>Content</Label>
                        <Textarea
                            name="content"
                            placeholder="Setting your environment alot more than the open SSL..."
                        />
                    </div>
                    {error && (
                        <div className="text-red-500 text-xs mb-4">
                            {error}
                        </div>
                    )}
                    <DialogFooter>
                        <Button type="submit" disabled={busy}>
                            {busy ? (<Loader className="animate-spin" />) : "Create bite"}
                        </Button>
                    </DialogFooter>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
