import { LogOut } from "lucide-react";
import { Form, useOutletContext, type MetaFunction } from "react-router"
import CustomAvatar from "~/components/custom/kribb-avatar";


export const meta: MetaFunction = () => {
    return [
        { title: "Account | OwenaHub" },
        { name: "description", content: "The Learner's Hub" },
    ];
};

export default function Account() {
    const user: User = useOutletContext();

    return (
        <section className="md:px-10 mt-10">
            <div className=" md:mt-20 mb-8 flex justify-between items-start">
                <div>
                    <h4 className="text-xl text-primary-foreground mb-3 font-bold">
                        Account
                    </h4>
                    <p className="text-sm leading-7">
                        Account details and settings page
                    </p>
                </div>
            </div>

            <section>
                <div className="flex gap-2 items-center">
                    <div>
                        <CustomAvatar name={user.name} styles="w-[5rem] h-[5rem] text-2xl" />
                    </div>
                    <div className="pe-4">
                        <h5 className="text-sm text-secondary-foreground font-bold">
                            {user.name}
                        </h5>
                        <p className="text-sm leading-7">
                            {user.email}
                        </p>
                    </div>
                    <div className="border-s px-4 py-4">
                        <Form method="POST" action="logout" className="cursor-pointer" title="logout">
                            <button type="submit"><LogOut className="text-destructive" strokeWidth={1} /></button>
                        </Form>
                    </div>
                </div>
            </section>
        </section>
    )
}
