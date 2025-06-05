import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getServerSession } from "@/lib/auth";

export const metadata = {
    title: "My profile",
    description: `Cart for e-ecommerce, selling products, and new productivity`,
};

export default async function MyAccountPage() {
    const session = await getServerSession();

    if (!session) redirect("/login?redirect=%2Fmy-account%2Fprofile");

    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
    });
    const phone = user.phoneNumber || null;


    return (<div className="m-0 min-w-0 pt-[65px] ml-0 flex-1 md:pt-0 md:ml-6">
        <h2 className="m-0 min-w-0 text-[#4D4D4D] text-[20px] font-medium mb-2">My Profile</h2>
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
    </div>)
}