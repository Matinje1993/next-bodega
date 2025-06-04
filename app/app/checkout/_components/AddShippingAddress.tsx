"use client";

import React, { useEffect } from "react";
import AddShippingAddressForm from "./AddShippingAddressForm";
import { useSidebarDialog } from "@/lib/sidebar-dialog-context";

export default function AddShippingAddress({ address }) {
    const { showSidebarDialog } = useSidebarDialog();

    useEffect(() => {
        if (!address) {
            showSidebarDialog({
                body: <AddShippingAddressForm />,
            });
        }
    }, [address]);

    if (!address) {
        return null;
    }

    return (<div className="m-0 min-w-0 block">
        <div className="mb-4 min-w-0 bg-white rounded-lg opacity-100 p-3 px-4 relative cursor-default block">
            <div className="m-0 min-w-0 text-black">
                <div className="m-0 min-w-0 flex items-center">
                    <div className="m-0 min-w-0 h-[20px] w-[17%] max-w-[20px]">
                        <svg id="AreaChangeLocation" viewBox="0 0 14 16" width="20px" height="20px">
                            <path d="M7.33336 0C9.5515 0 11.5455 1.01409 12.8036 2.78191C14.0556 4.54078 14.3447 6.76756 13.5769 8.73847C13.3737 9.27141 13.0483 9.79281 12.6111 10.2847L7.77206 15.8031C7.66259 15.928 7.50219 16 7.33336 16C7.16454 16 7.00414 15.928 6.89467 15.8031L2.05425 10.2833C1.619 9.79413 1.29322 9.27216 1.08827 8.73491C0.322061 6.76756 0.611145 4.54078 1.86311 2.78191C3.12126 1.01409 5.11523 0 7.33336 0ZM11.7378 9.55528C12.0852 9.16425 12.3411 8.75772 12.4978 8.34653C13.133 6.71578 12.8924 4.87466 11.8555 3.41806C10.8156 1.95678 9.16733 1.11875 7.33336 1.11875C5.49936 1.11875 3.85093 1.95681 2.81102 3.41806C1.77437 4.87466 1.53389 6.71578 2.16755 8.34281C2.32582 8.75794 2.58168 9.16444 2.92896 9.55513L7.33336 14.5776L11.7351 9.55828C11.7358 9.55716 11.7368 9.55622 11.7378 9.55528Z" fill="#000"></path>
                            <path d="M3.99951 6.66652C3.99951 4.82842 5.49494 3.33319 7.33284 3.33319C9.17075 3.33319 10.6662 4.82862 10.6662 6.66652C10.6662 8.50463 9.17095 9.99986 7.33284 9.99986C5.49474 9.99986 3.99951 8.50463 3.99951 6.66652ZM5.19033 6.66688C5.19033 7.84843 6.15164 8.80974 7.3332 8.80974C8.51475 8.80974 9.47607 7.84843 9.47607 6.66688C9.47607 5.48532 8.51475 4.52401 7.3332 4.52401C6.15164 4.52401 5.19033 5.48532 5.19033 6.66688Z" fill="#000"></path>
                        </svg>
                    </div>
                    <div className="ml-2 m-0 min-w-0">
                        <span className="mr-1 m-0 text-sm font-bold text-black">Delivery to:</span>
                        <span className="font-semibold text-sm text-black capitalize">{address?.addressLabel || 'home'}</span>
                        <div className="m-0 min-w-0">
                            {address?.number}, {address?.building}, {address?.street}, {address?.area}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}