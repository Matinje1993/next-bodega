'use client';

import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

type Props = {
    firstName: string | null;
    lastName: string | null;
};

const UserDropdown: React.FC<Props> = ({ firstName, lastName }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div
            className="m-0 min-w-0 flex relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
        >
            <div>
                <div className="min-w-0 cursor-pointer flex justify-center h-full m-[4px_12px] px-[12px] py-[4px] md:min-w-[160px] lg:mb-0 hover:bg-[#0B4C8E] hover:rounded-[66px]">
                    <div className="min-w-0 flex items-center m-[4px_12px]">
                        <svg id="UserInverse" viewBox="0 0 24 24" className="w-[24px] h-[24px]">
                            <g strokeWidth="2" transform="translate(0, 0)">
                                <path data-cap="butt" data-color="color-2" fill="none" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" d="M19,20.486v-0.745 c0-1.077-0.577-2.071-1.512-2.605l-3.219-1.842" strokeLinejoin="miter" strokeLinecap="butt"></path>
                                <path data-cap="butt" data-color="color-2" fill="none" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" d="M9.727,15.292l-3.215,1.844 C5.577,17.67,5,18.664,5,19.741v0.745" strokeLinejoin="miter" strokeLinecap="butt"></path>
                                <path data-color="color-2" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M12,16L12,16 c-2.209,0-4-1.791-4-4v-2c0-2.209,1.791-4,4-4h0c2.209,0,4,1.791,4,4v2C16,14.209,14.209,16,12,16z" strokeLinejoin="miter"></path>
                                <circle fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="12" cy="12" r="11" strokeLinejoin="miter"></circle>
                            </g>
                        </svg>
                        <div className="m-[0px_8px] min-w-0 flex flex-col lg:flex-row not-italic">
                            <div className="m-0 min-w-0 flex flex-row lg:flex-col">
                                <span className="mt-0 ml-0 min-w-0 text-[12px] font-normal mr-[4px] mb-0 text-white lg:mr-0">Welcome back</span>
                                <span className="m-0 min-w-0 text-[12px] font-normal text-white lg:font-bold">{firstName} {lastName}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showDropdown && (
                <div className="flex flex-col m-0 min-w-0 absolute visible top-[52px] right-0 opacity-100 translate-y-0 z-[99]">
                    <ul className="min-w-[240px] pt-[6px] pb-[12px] px-0 rounded-[5px] bg-white shadow-md rounded-[2px] p-2 m-0">
                        <li className="m-0 min-w-0  last:border-0 border-b border-gray-100 font-medium px-6 py-3">
                            <Link href="/my-account" className="m-0 min-w-0 pt-1 pb-1 text-[#2d2d2d] text-sm no-underline block hover:text-[#0E5AA7]">My Dashboard</Link>
                        </li>
                        <li className="m-0 min-w-0  last:border-0 border-b border-gray-100 font-medium px-6 py-3">
                            <Link href="/my-account/orders" className="m-0 min-w-0 pt-1 pb-1 text-[#2d2d2d] text-sm no-underline block hover:text-[#0E5AA7]">My Orders</Link>
                        </li>
                        <li className="m-0 min-w-0  last:border-0 border-b border-gray-100 font-medium px-6 py-3">
                            <SignOutButton>
                                <a className="cursor-pointer m-0 min-w-0 pt-1 pb-1 text-[#2d2d2d] text-sm no-underline block hover:text-[#0E5AA7]">Logout</a>
                            </SignOutButton>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;