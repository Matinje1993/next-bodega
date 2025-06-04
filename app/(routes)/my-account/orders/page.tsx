import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { PrismaClient } from '@/lib/generated/prisma';
import OrderNotFound from "./OrderNotFound";

const prisma = new PrismaClient();

export const metadata = {
    title: "My Orders",
    description: `Cart for e-ecommerce, selling products, and new productivity`,
};

export default async function MyAccountPage() {
    const { userId } = auth();

    if (!userId) redirect("/login?redirect_url=%2Fmy-account%2Fprofile");

    const orders = await prisma.order.findMany({
        where: { clerkUserId: userId },
        include: {
            items: {
                include: {
                    product: {
                        include: {
                            links: true
                        }
                    }, // Load full product details
                },
            },
        },
        orderBy: {
            createdAt: 'desc',
        },
    })
    return (
        <div className="m-0 min-w-0 pt-[65px] ml-0 flex-1 md:pt-0 md:ml-6">
            <h2 className="m-0 min-w-0 text-[#4D4D4D] text-[20px] font-medium mb-2">My Orders</h2>
            {orders.length === 0 ? (<OrderNotFound />) :
                (orders.map(order => {
                    const itemCount = order.items.reduce((total, item) => total + item.quantity, 0);

                    return (<div key={order.id} className="my-[10px] mb-[13px] min-w-0 flex flex-col pb-[10px] text-black">
                        <div className="min-w-0 border-b-2 border-gray-200 my-6 relative">
                            <div className="m-0 min-w-0 bg-white inline-block px-4 py-2 rounded-full absolute -top-4 left-1/2 -translate-x-1/2">
                                {new Date(order.createdAt).toLocaleDateString('en-US', {
                                    weekday: 'short',
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit',
                                })}
                            </div>
                        </div>
                        <div className="mb-4 min-w-0">
                            <div className="mb-1 min-w-0 flex justify-between text-xs">
                                <div className="m-0 min-w-0 font-bold">
                                    Order no.
                                </div>
                                <div className="m-0 min-w-0">
                                    {order.id}
                                </div>
                            </div>
                            <div className="mb-1 min-w-0 flex justify-between text-xs">
                                <div className="m-0 min-w-0 font-bold">
                                    Total
                                </div>
                                <div className="m-0 min-w-0">
                                    <div className="m-0 min-w-0 font-bold">
                                        KES {new Intl.NumberFormat('en-US', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        }).format(order.totalAmount + order.deliveryFee)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="min-w-0 flex flex-col p-4 text-black bg-white mb-2 rounded-lg text-xs">
                            <div className="flex justify-between mb-4">
                                <div className="m-0 min-w-0 flex">
                                    <span className="mr-1 min-w-0 font-bold">Shipment 1</span>
                                    <div className="min-w-0 m-0">
                                        <span>({itemCount} {itemCount == 1 ? 'item' : 'items'})</span>
                                    </div>
                                </div>
                                <div className="m-0 min-w-0"></div>
                            </div>
                            <div className="mb-4 min-w-0 flex overflow-x-auto overflow-y-hidden items-center">
                                {order.items.map(item => (
                                    <div className="m-0 mr-2 min-w-0 p-0">
                                        <img height="auto" width="100%" src={item.product.links?.images?.[0]?.href} alt={item.product.name} className="w-[48px] h-[48px]" />
                                    </div>
                                ))}
                            </div>
                            <div className="bg-white rounded p-b-0 mb-4">
                                <div className="flex items-center mb-1">
                                    <div className="inline-block font-semibold text-left text-sm text-black w-auto">
                                        <img src="https://orderstatusmaster.blob.core.windows.net/statusicons/order_placed.png" className="align-middle m-2 ml-2 h-auto w-5" style={{ display: 'unset' }}></img>
                                        Order Placed
                                    </div>
                                </div>
                                <div className="rounded-md bg-gray-600 bg-opacity-10 h-[7px]">
                                    <div className="inline bg-[#0B5AA6] h-2 float-left" style={{ background: 'rgb(11, 90, 166)', borderRadius: '4px', width: '20%' }}>
                                        <div className="bg-white h-[6px] w-[6px] rounded-full float-right m-[1px]"></div>
                                    </div>
                                    <div className="inline bg-[#0B5AA6] h-2 float-left" style={{ background: 'none', borderRadius: '4px', width: '20%' }}>
                                        <div className="bg-white h-[6px] w-[6px] rounded-full float-right m-[1px]"></div>
                                    </div>
                                    <div className="inline bg-[#0B5AA6] h-2 float-left" style={{ background: 'none', borderRadius: '4px', width: '20%' }}>
                                        <div className="bg-white h-[6px] w-[6px] rounded-full float-right m-[1px]"></div>
                                    </div>
                                    <div className="inline bg-[#0B5AA6] h-2 float-left" style={{ background: 'none', borderRadius: '4px', width: '20%' }}>
                                        <div className="bg-white h-[6px] w-[6px] rounded-full float-right m-[1px]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                })
                )}
            <div className="flex justify-center items-center m-0 min-w-0">
                <span className="mb-4 text-[16px] text-gray-600 pt-2 pb-1">No more orders to show</span>
            </div>
        </div>
    )
}