import { useOutletContext } from "react-router"
import CustomAvatar from "~/components/custom/kribb-avatar";

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
                    <div>
                        <h5 className="text-sm text-secondary-foreground font-bold">
                            {user.name}
                        </h5>
                        <p className="text-sm leading-7">
                            {user.email}
                        </p>
                    </div>
                </div>
            </section>
        </section>
    )
}
