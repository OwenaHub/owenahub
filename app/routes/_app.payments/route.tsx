import { Link, useOutletContext, type MetaFunction } from "react-router";
import { IsAdmin } from "~/components/permissions/admin";

export const meta: MetaFunction = () => {
    return [
        { title: "Payments | OwenaHub" },
        { name: "description", content: "The Learner's Hub" },
    ];
};

export default function Payments() {
    const user: User = useOutletContext();

    return (
        <section className="md:px-10 mt-10">
            <div className="md:mt-20 mb-8 flex justify-between items-start">
                <div>
                    <h4 className="text-xl text-primary-foreground mb-3 font-bold">
                        Payments
                    </h4>
                    <p className="text-sm leading-7">
                        Your purchases are safely recorded.
                    </p>
                </div>

                <IsAdmin user={user}>
                    <Link
                        to={"vouchers/create"}
                        className='py-2 bg-secondary text-secondary-foreground px-6 rounded-md font-bold uppercase text-xs hover:opacity-50 transition'
                    >
                        NEW VOUCHER
                    </Link>
                </IsAdmin>
            </div>

            <div className='border rounded-lg pb-10'>
                <div className="p-5">
                    <h2 className='text-xl font-medium text-secondary-foreground'>Payment records</h2>
                </div>
                <div className="p-5 text-sm border-t">
                    No records
                </div>
            </div>
        </section>
    )
}
