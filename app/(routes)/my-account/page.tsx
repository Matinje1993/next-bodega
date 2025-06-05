import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import Link from "next/link";
import { getServerSession } from "@/lib/auth";

export const metadata = {
    title: "My account",
    description: `Cart for e-ecommerce, selling products, and new productivity`,
};

export default async function MyAccountPage() {
    const session = await getServerSession();

    if (!session) redirect("/login?redirect=%2Fmy-account");

    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
    });

    const phone = user.phoneNumber || null;

    const defaultAddress = await prisma.address.findFirst({
        where: {
            clerkUserId: user.id,
            isDefault: true,
        },
    })

    const addressToUse = defaultAddress ?? (
        await prisma.address.findFirst({
            where: { clerkUserId: user.id },
            orderBy: { createdAt: 'desc' }
        })
    )

    return (<div className="m-0 min-w-0 pt-[65px] ml-0 flex-1 md:pt-0 md:ml-6">
        <h2 className="m-0 min-w-0 text-[#4D4D4D] text-[20px] font-medium mb-2">My Account</h2>
        <div className="m-0 min-w-0 bg-white text-[#4D4D4D] p-4 shadow-md xs:p-6">
            <div className="m-0 min-w-0 flex justify-between">
                <h2 className="m-0 mb-2 min-w-0 text-lg font-bold capitalize">
                    {user.firstName} {user.lastName}
                </h2>
                <a className="text-[#0E5AA7] text-sm no-underline cursor-pointer outline-none transition-[box-shadow,background-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] rounded w-auto h-12 font-bold shadow-none">
                    Edit
                </a>
            </div>
            <div className="flex flex-col flex-wrap xs:flex-row m-0 box-border min-w-0">
                <div className="m-0 mb-4 min-w-0 flex relative items-center px-0 xs:[flex-basis:50%] xs:px-4 md:[flex-basis:auto] lg:mb-0 first:pl-0">
                    <div className="m-0 mr-2 min-w-0">
                        <svg height="24" width="24" viewBox="0 0 24 24"><path fill="#4D4D4D" d="M20.32422,5.20748H3.67676A1.75931,1.75931,0,0,0,1.91992,6.96675L1.96973,18.25l1-.00489L2.92035,7.06331,11.72656,12.833a.50439.50439,0,0,0,.27442.08155.49763.49763,0,0,0,.2705-.07959l8.8086-5.66883v9.3114a.757.757,0,0,1-.75586.75684H4.96875v1H20.32422a1.75859,1.75859,0,0,0,1.75586-1.75684V6.96431A1.75858,1.75858,0,0,0,20.32422,5.20748Z"></path><path fill="#cfcfcf" d="M20.26434,6.23865H3.61688a.72584.72584,0,0,0-.18072.03662l7.5769,4.96485.95227.595L20.56384,6.302A.7491.7491,0,0,0,20.26434,6.23865Z"></path></svg>
                    </div>
                    <div className="m-0 min-w-0">
                        <h4 className="m-0 mb-1 min-w-0">
                            Email Address
                        </h4>
                        <p>{user.email || null}</p>
                    </div>
                </div>
                <div className="m-0 mb-4 min-w-0 flex relative items-center px-0 xs:[flex-basis:50%] xs:px-4 md:[flex-basis:auto] lg:mb-0 first:pl-0">
                    <div className="m-0 mr-2 min-w-0">
                        <svg height="24" width="24" viewBox="0 0 24 24"><path fill="#4D4D4D" d="M15.998,1.50011H8.00191A2.468,2.468,0,0,0,5.5,3.92687V19.48155a2.468,2.468,0,0,0,2.502,2.42676h7.376v-1h2.12207v1.0918h1V3.92687A2.468,2.468,0,0,0,15.998,1.50011ZM17.49995,16.9796H6.5V5.79112h11Z"></path><g fill="#cfcfcf"><path d="M6.5,17.98652v1.502a1.46725,1.46725,0,0,0,1.502,1.42676H17.5V17.98652Zm6.58691,1.90527H10.91309v-1h2.17382Z"></path><path d="M15.99805,2.507H8.002A1.46725,1.46725,0,0,0,6.5,3.93378V4.798h11V3.93378A1.46725,1.46725,0,0,0,15.99805,2.507Z"></path></g></svg>
                    </div>
                    <div className="m-0 min-w-0">
                        <h4 className="m-0 mb-1 min-w-0">
                            Mobile Number
                        </h4>
                        <p>
                            {phone ? user.countryCode + ' ' + phone :
                                <a className="text-blue-700 text-sm cursor-pointer outline-none transition-shadow transition-colors duration-300 rounded-md h-12 font-bold no-underline">Add Phone Number</a>
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="m-0 min-w-0 flex flex-wrap">
            <div className="m-0 min-w-0 mt-4 mr-0 bg-white text-gray-700 p-4 shadow sm:p-6 lg:flex-1 flex-auto">
                <div>
                    <div className="m-0 min-w-0 flex">
                        <div className="m-0 min-w-0 w-3/4 text-base font-bold">
                            <h3 className="text-[#4D4D4D] text-sm xs:text-base">My Addresses</h3>
                        </div>
                        <div className="m-0 min-w-0 w-1/4 text-right">
                            <Link href="/my-account/address-book" className="text-[#0E5AA7] text-sm normal-case no-underline cursor-pointer outline-none transition-shadow transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-md font-bold h-12 w-auto">
                                View All
                            </Link>
                        </div>
                    </div>
                </div>
                <br />
                {!addressToUse && <p className="text-[#4D4D4D]">No address found</p>}
                <div className="mt-2 grid gap-4 flex-1 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                    <div className="m-0 min-w-0 h-28 p-4 flex flex-row justify-center items-center border border-dashed border-gray-300 cursor-pointer sm:flex-col">
                        <svg height="24" width="24" viewBox="0 0 24 24"><g><polygon points="12.5,2 11.5,2 11.5,11.5 2,11.5 2,12.5 11.5,12.5 11.5,22 12.5,22 12.5,12.5 22,12.5 22,11.5 12.5,11.5 "></polygon></g></svg>
                        <h3 className="m-0 min-w-0 text-blue-800 font-medium mt-0 ml-2 md:mt-2 md:ml-0">Add New Address</h3>
                    </div>
                    {addressToUse && <div className="m-0 min-w-0 h-[112px] flex-1 flex flex-col justify-center p-4 border border-gray-300">
                        <div className="m-0 mb-4 min-w-0 flex">
                            <div className="w-[85%] min-w-[85%]">
                                <p className="text-[12px] overflow-hidden truncate whitespace-nowrap">{addressToUse.fullName}</p>
                                <p className="text-[12px] overflow-hidden truncate whitespace-nowrap">{addressToUse.country}</p>
                                <p className="text-[12px] overflow-hidden truncate whitespace-nowrap">{addressToUse.number}, {addressToUse.building}, {addressToUse.street}</p>
                                <p className="text-[12px] overflow-hidden truncate whitespace-nowrap">{addressToUse.area}</p>
                            </div>
                            <div className="w-full text-right">
                                <svg height="24" width="24" viewBox="0 0 24 24"><path fill="#4D4D4D" d="M18.268,15.1657l3.876-4.291a1.37763,1.37763,0,0,0-.73828-2.27149L15.96626,7.45574,13.19478,2.63738a1.42444,1.42444,0,0,0-2.38965,0L8.03365,7.45574,2.59419,8.6032a1.37763,1.37763,0,0,0-.73828,2.27149l3.72657,4.125L4.99263,20.527a1.38189,1.38189,0,0,0,1.36621,1.52735,1.38047,1.38047,0,0,0,.56641-.123l5.07519-2.26758,5.07422,2.26758A1.377,1.377,0,0,0,19.00728,20.528l-.40625-3.8125-.49756.05273v-.00048l-.20654-1.93653.00024-.00024Z"></path><path fill="#b7cee5" d="M17.52583,14.49605l3.876-4.291a.37761.37761,0,0,0-.20312-.62305L15.54048,8.38863a.49974.49974,0,0,1-.33008-.24023L12.32759,3.1357a.378.378,0,0,0-.65527,0L8.78951,8.1484a.49974.49974,0,0,1-.33008.24023L2.80123,9.582a.3776.3776,0,0,0-.20313.62305l3.876,4.291a.49521.49521,0,0,1,.126.3877l-.61328,5.75a.37852.37852,0,0,0,.53028.38574l5.27929-2.35938a.496.496,0,0,1,.40821,0l5.27832,2.35938a.37841.37841,0,0,0,.53027-.38477l-.40625-3.81347.49658-.05274V16.768l-.20654-1.93676.00024-.00025Z"></path></svg>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    </div>)
}