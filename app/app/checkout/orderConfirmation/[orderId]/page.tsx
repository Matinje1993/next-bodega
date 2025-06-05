import Link from "next/link";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";
import { PrismaClient } from '@/lib/generated/prisma';
import { getServerSession } from "@/lib/auth";

const prisma = new PrismaClient();

export default async function OrderConfirmation({ params }: { params: { orderId: string } }) {
    const session = await getServerSession();

    if (!session) redirect("/");

    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
    });

    // Get email
    const email = user.email || null;

    const order = await prisma.order.findUnique({
        where: { id: params.orderId },
        include: {
            items: true,
            deliveryAddress: true,
        },
    });

    if (!order) return notFound();

    return (
        <div className="box-border m-0 min-w-0 relative flex flex-col justify-center pb-4 pt-2 xs:pb-6 xs:flex-col sm:flex-col sm:pb-6 md:flex-row md:static">
            <div className="my-2 min-w-0 px-4 pt-2 w-full max-w-[837.76px] md:w-[90%] font-montserrat">
                <div className="mb-6">
                    <div className="m-0 min-w-0">
                        <div className="min-w-0 m-0 pb-4 text-center">
                            <img height="240px" width="auto" src="/static/media/confirmed.83148f83ff259fbeb5c6.png" alt="confirmed-order" className="max-w-full h-[240px] border-0 align-middle" style={{ display: 'unset' }} />
                        </div>
                        <div className="min-w-0 m-0 text-center">
                            <div className="mb-6 min-w-0 text-center">
                                <p className="text-black pl-2 text-xl font-bold mb-6">Order submitted!</p>
                                <p className="text-black">We're preparing your order now. You will receive a notification soon!</p>
                            </div>
                            <div className="min-w-0 mb-6 md:mb-4">
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="flex justify-between m-0 min-w-0">
                                        <p className="mb-1 min-w-0 text-sm text-black font-bold">Payment processed:</p>
                                        <p className="mb-1 min-w-0 text-sm text-black">KES {new Intl.NumberFormat('en-US', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        }).format(order.totalAmount + order.deliveryFee)}</p>
                                    </div>
                                    <span className="my-4 min-w-0 block h-px w-full bg-gray-200"></span>
                                    <div className="flex justify-between m-0 min-w-0">
                                        <p className="mb-1 min-w-0 text-sm text-black font-bold">Order Number:</p>
                                        <p className="mb-1 min-w-0 text-sm text-black">{order.id}</p>
                                    </div>
                                    <span className="my-4 min-w-0 block h-px w-full bg-gray-200"></span>
                                    <div className="flex justify-between m-0 min-w-0">
                                        <p className="mb-1 min-w-0 text-sm text-black font-bold">Confirmation sent to:</p>
                                        <p className="mb-1 min-w-0 text-sm text-black">{email}</p>
                                    </div>
                                    <span className="my-4 min-w-0 block h-px w-full bg-gray-200"></span>
                                    <div className="m-0 min-w-0 justify-between block text-left">
                                        <p className="mb-1 min-w-0 text-sm text-black font-bold">Delivery address:</p>
                                        <p className="mb-1 min-w-0 text-sm text-black">{order.deliveryAddress.number}, {order.deliveryAddress.building}, {order.deliveryAddress.street}, {order.deliveryAddress.area}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-w-0 mb-6 xs:mb-6 sm:mb-6 md:mb-4">
                    <h2 className="text-sm font-bold mb-2 text-black xs:text-sm sm:text-sm md:text-base">Order Summary</h2>
                    <div className="m-0 min-w-0 p-4 rounded-lg bg-white">
                        <div className="m-0 min-w-0">
                            <div className="mb-4 min-w-0">
                                <div className="mb-4 min-w-0 flex justify-between items-center text-[14px] text-black font-bold">
                                    <span className="m-0 min-w-0">
                                        Shipment subtotal (incl. VAT)
                                    </span>
                                    <span className="m-0 min-w-0">KES {new Intl.NumberFormat('en-US', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    }).format(order.totalAmount)}</span>
                                </div>
                                <div className="mb-4 min-w-0 flex justify-between items-center text-[14px] text-black font-normal">
                                    <span className="m-0 min-w-0">
                                        Scheduled shipment
                                    </span>
                                    <span className="m-0 min-w-0">KES {new Intl.NumberFormat('en-US', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    }).format(order.totalAmount)}</span>
                                </div>
                            </div>
                            <span className="mb-3 min-w-0 block h-px w-full bg-gray-200"></span>
                            <div className="mb-3 min-w-0">
                                <div className="mb-4 min-w-0 flex justify-between items-center text-[14px] text-black font-bold">
                                    <span className="m-0 min-w-0">
                                        Fees
                                    </span>
                                    <span className="m-0 min-w-0">KES {new Intl.NumberFormat('en-US', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    }).format(order.deliveryFee)}</span>
                                </div>
                                <div className="mb-4 min-w-0 flex justify-between items-center text-[14px] text-black font-normal">
                                    <span className="m-0 min-w-0">
                                        Scheduled delivery fee
                                    </span>
                                    <span className="m-0 min-w-0">KES {new Intl.NumberFormat('en-US', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    }).format(order.deliveryFee)}</span>
                                </div>
                            </div>
                            <span className="mb-3 min-w-0 block h-px w-full bg-gray-200"></span>
                            <div className="mb-3 min-w-0">
                                <div className="mb-4 min-w-0 flex justify-between items-center text-[14px] text-black font-bold">
                                    <span className="m-0 min-w-0">
                                        Payment methods
                                    </span>
                                    <span className="m-0 min-w-0"></span>
                                </div>
                                <div className="mb-4 min-w-0 flex justify-between items-center text-[14px] text-black font-normal">
                                    <span className="m-0 min-w-0">
                                        <div className="m-0 min-w-0 flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 40 40"
                                                width="30"
                                                height="26"
                                                id="COD"
                                            >
                                                <defs>
                                                    <style>{`.cls-1{fill:#4d4d4d;stroke:#4d4d4d;stroke-width:0.1px;}`}</style>
                                                </defs>
                                                <g id="Page-1">
                                                    <g id="_022---Cash" data-name="022---Cash">
                                                        <path
                                                            id="Shape"
                                                            className="cls-1"
                                                            d="M32.84,13.12H14A.46.46,0,0,0,14,14h2.77a7.11,7.11,0,0,0,0,11.92H7.16V14h4.59a.46.46,0,0,0,0-.92H7.16a.92.92,0,0,0-.92.92V26a.92.92,0,0,0,.92.92H32.84a.92.92,0,0,0,.92-.92V14A.92.92,0,0,0,32.84,13.12ZM14.5,20A5.75,5.75,0,0,1,20,14a5.75,5.75,0,0,1,5.5,6A5.75,5.75,0,0,1,20,26,5.75,5.75,0,0,1,14.5,20Zm18.34,6H23.19a7.11,7.11,0,0,0,0-11.92h9.65Z"
                                                        />
                                                        <path
                                                            id="Shape-2"
                                                            data-name="Shape"
                                                            className="cls-1"
                                                            d="M30.43,8.17a1,1,0,0,0-.7-.05l-9.88,3.31a.47.47,0,0,0-.29.59.46.46,0,0,0,.58.29L30,9l1,3a.45.45,0,0,0,.34.3.48.48,0,0,0,.44-.14.47.47,0,0,0,.09-.45l-1-3A1,1,0,0,0,30.43,8.17Z"
                                                        />
                                                        <path
                                                            id="Shape-3"
                                                            data-name="Shape"
                                                            className="cls-1"
                                                            d="M19.86,27.7,10,31,9,28a.46.46,0,0,0-.58-.29.47.47,0,0,0-.29.59l1,3a.91.91,0,0,0,.46.54,1,1,0,0,0,.41.09.92.92,0,0,0,.29,0l9.88-3.31a.46.46,0,1,0-.3-.88Z"
                                                        />
                                                        <path
                                                            id="Shape-4"
                                                            data-name="Shape"
                                                            className="cls-1"
                                                            d="M29.63,25h1.83a.45.45,0,0,0,.46-.45V22.75a.46.46,0,1,0-.91,0v1.38H29.63a.46.46,0,1,0,0,.91Z"
                                                        />
                                                        <path
                                                            id="Shape-5"
                                                            data-name="Shape"
                                                            className="cls-1"
                                                            d="M8.54,22.29a.46.46,0,0,0-.46.46v1.84a.45.45,0,0,0,.46.45h1.83a.46.46,0,1,0,0-.91H9V22.75A.46.46,0,0,0,8.54,22.29Z"
                                                        />
                                                        <path
                                                            id="Shape-6"
                                                            data-name="Shape"
                                                            className="cls-1"
                                                            d="M10.37,15H8.54a.45.45,0,0,0-.46.46v1.83a.46.46,0,1,0,.91,0V15.87h1.38a.46.46,0,1,0,0-.91Z"
                                                        />
                                                        <path
                                                            id="Shape-7"
                                                            data-name="Shape"
                                                            className="cls-1"
                                                            d="M29.63,15.87H31v1.38a.46.46,0,1,0,.91,0V15.42a.45.45,0,0,0-.46-.46H29.63a.46.46,0,1,0,0,.91Z"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                            <div className="ml-1 min-w-0 text-[12px] text-black">Cash on Delivery</div>
                                        </div>
                                    </span>
                                    <span className="m-0 min-w-0">KES {new Intl.NumberFormat('en-US', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    }).format(order.totalAmount + order.deliveryFee)}</span>
                                </div>
                            </div>
                            <span className="mb-3 min-w-0 block h-px w-full bg-gray-200"></span>
                            <div className="mb-4 min-w-0 flex justify-between items-center text-sm text-black font-bold">
                                <span className="m-0 min-w-0">
                                    Total amount due (Incl. VAT)
                                </span>
                                <span className="m-0 min-w-0">KES {new Intl.NumberFormat('en-US', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                }).format(order.totalAmount + order.deliveryFee)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-w-0 m-0 flex justify-center sm:justify-end">
                    <Link href="/" className="w-full">
                        <button className="px-6 text-blue-900 outline-none transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] text-sm h-12 normal-case my-2 font-bold w-full bg-transparent border-2 border-current rounded-lg">Keep Shopping</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}