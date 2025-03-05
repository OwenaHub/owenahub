import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "~/components/ui/popover"

// import { Button } from "~/components/ui/button"
// import { Switch } from "~/components/ui/switch"

import {
    Bell,
    // BellRing,
    // Check
} from "lucide-react"

import { cn } from "~/lib/utils"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"

const notifications = [
    {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
    },
    {
        title: "You have a new message!",
        description: "1 hour ago",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
    },
]

type CardProps = React.ComponentProps<typeof Card>


export function AppNotification({ className, ...props }: CardProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
                    <div className='relative'>
                        <Bell className="fill-secondary" size={28} strokeWidth={1} />
                        <span className="h-3 w-3 absolute -top-0.5 -right-0.5 rounded-full bg-secondary-foreground animate-pulse" />
                    </div>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-max p-0 border-0 shadow-2xl rounded-none">
                <Card className={cn("w-[380px]", className)} {...props}>
                    <CardHeader>
                        <CardTitle>Notifications</CardTitle>
                        <CardDescription>You have 3 unread messages.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        {/* <div className=" flex items-center space-x-4 rounded-md border p-4">
                            <BellRing />
                            <div className="flex-1 space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    Push Notifications
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Send notifications to device.
                                </p>
                            </div>
                            <Switch />
                        </div> */}
                        <div>
                            {notifications.map((notification, index) => (
                                <div
                                    key={index}
                                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                >
                                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            {notification.title}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {notification.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        {/* <Button className="w-full">
                            <Check /> Mark all as read
                        </Button> */}
                    </CardFooter>
                </Card>
            </PopoverContent>
        </Popover>
    )
}
