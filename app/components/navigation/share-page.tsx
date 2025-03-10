import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog"
import { Button } from "../ui/button"
import { Facebook, Link, Linkedin, MessageCircle, Share2, Twitter } from "lucide-react"
import { toast } from "~/hooks/use-toast";

export default function SharePage() {
    const pageLink = window.location.href;
    const inviteText =
        `Hello there,\nI think you'd find this interesting: ${pageLink}\nOwenaHub`;

    function handleFacebook() {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageLink)}`);
    }

    function handleWhatsapp() {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(inviteText)}`);
    }

    function handleTwitter() {
        const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(inviteText)}`;
        window.open(twitterShareUrl);
    }

    function handleLinkedin() {
        const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageLink)}`;
        window.open(linkedinShareUrl);
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(window.location.href)
            .then(() => toast({ description: "Copied to clipboard" }))
            .catch(err => {
                console.error(err);
                toast({ variant: "warning", description: "Copying unavailable" })
            });
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="flex items-center gap-1 rounded-full w-full md:w-max px-6 py-5" variant={"outline"}>
                    <Share2 /> <span>Share this course</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className="text-start">
                    <DialogTitle>Share with someone</DialogTitle>
                    <DialogDescription>
                        Share this course with someone. Copy the link and send it.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center flex-wrap gap-4 py-4" id="social">
                    <div
                        onClick={() => handleLinkedin()}
                        className="p-4 rounded-full cursor-pointer linkedin hover:outline outline-1 outline-current"
                        title="share on Linkedin">
                        <Linkedin size={18} fill="white" strokeWidth={1} />
                    </div>
                    <div
                        onClick={() => handleFacebook()}
                        className="p-4 rounded-full cursor-pointer facebook hover:outline outline-1 outline-current"
                        title="Share on Facebook">
                        <Facebook size={18} fill="white" strokeWidth={1} />
                    </div>
                    <div
                        onClick={() => handleWhatsapp()}
                        className="p-4 rounded-full cursor-pointer whatsapp hover:outline outline-1 outline-current"
                        title="Share on WhatsApp">
                        <MessageCircle size={18} />
                    </div>
                    <div
                        onClick={() => handleTwitter()}
                        className="p-4 rounded-full cursor-pointer bg-gray-900 text-white hover:outline outline-1 outline-current"
                        title="Share on X">
                        <Twitter size={18} />
                    </div>
                    <div
                        className="p-4 rounded-full cursor-pointer border hover:outline outline-1 outline-current"
                        title="Copy link"
                        onClick={copyToClipboard}
                    >
                        <Link size={18} />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
