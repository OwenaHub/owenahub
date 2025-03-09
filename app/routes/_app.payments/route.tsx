import { Await, Link, useOutletContext, type MetaFunction } from "react-router";
import { IsAdmin } from "~/components/permissions/admin";
import type { Route } from "../_app.payments/+types/route";
import { getVoucherCodes } from "./payments";
import useSession from "~/lib/session";
import { VoucherCodeTable } from "./voucher-code-table";
import { Suspense } from "react";
import Spinner from "~/components/navigation/default-spinner";

export const meta: MetaFunction = () => {
    return [
        { title: "Payments | OwenaHub" },
        { name: "description", content: "The Learner's Hub" },
    ];
};

export async function clientLoader({ }: Route.ClientLoaderArgs) {
    const { getUserType } = useSession();

    try {
        const role = await getUserType();
        const codes = role === "admin" ? getVoucherCodes() : null;

        return { codes };
    } catch (error) {
        return {};
    }
}

export default function Payments({ loaderData }: Route.ComponentProps) {
    const user: User = useOutletContext();
    const { codes } = loaderData;

    return (
        <section className="md:px-10 mt-10 pb-5">
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

            <div className='border rounded-lg mb-10'>
                <div className="p-5">
                    <h2 className='text-xl font-medium text-secondary-foreground'>Payment records</h2>
                </div>
                <div className="p-5 text-sm border-t">
                    No records
                </div>
            </div>

            <IsAdmin user={user}>
                <Suspense fallback={<Spinner />}>
                    <Await resolve={codes}>
                        {(codes) => <VoucherCodeTable voucherCodes={codes} />}
                    </Await>
                </Suspense>
            </IsAdmin>
        </section>
    )
}
