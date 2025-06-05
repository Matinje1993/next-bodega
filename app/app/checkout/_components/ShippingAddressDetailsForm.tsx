'use client';
import FloatingLabelInput from "@/components/ui/FloatingLabelInput";
import { useSidebarDialog, useSwitchSidebarDialog } from "@/lib/sidebar-dialog-context";
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import AddShippingAddressForm from "./AddShippingAddressForm";
import { useRouter } from 'next/navigation';

export default function ShippingAddressDetailsForm({ selected }) {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const switchSidebarDialog = useSwitchSidebarDialog();
    const { showSidebarDialog } = useSidebarDialog();
    if (status === 'loading') {
        return <div>Loading...</div>;
    }
    if (status === 'unauthenticated') {
        router.push(`/login?redirect=${encodeURIComponent('/app/checkout')}`);
    }

    const user = session?.user;
    const [formData, setFormData] = useState({
        number: '',
        building: '',
        street: selected?.address.county ||
            selected?.address.state_district ||
            selected?.address.state
            ? `${selected?.address.county || selected?.address.state_district || selected?.address.state}, Kenya`
            : '',
        area: selected?.address.county ||
            selected?.address.state_district ||
            selected?.address.state
            ? `${selected?.address.county || selected?.address.state_district || selected?.address.state}`
            : '',
        landmark: '',
        instructions: '',
        deliveryInstructions: '',
        country: '+254',
        phone: '',
        fullName: user.name,
        addressLabel: '',
        lat: selected?.lat || null,
        lon: selected?.lon || null,
    });

    const isValidPhone = (phone) =>
        /^\d{10,15}$/.test(phone);

    const isFormValid =
        formData.fullName.trim() !== '' &&
        isValidPhone(formData.phone) &&
        formData.number.trim() !== '' &&
        formData.building.trim() !== '' &&
        formData.street.trim() !== '' &&
        formData.area.trim() !== '' &&
        formData.country.trim() !== '';

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        const res = await fetch('/api/v1/address', {
            method: 'POST',
            body: JSON.stringify({ ...formData, userId: user.id }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (res.ok) {
            setLoading(false)
            showSidebarDialog(null)
            window.location.reload()
        } else {
            setLoading(false);
            console.log('Failed to save address.')
        }
    }

    return (
        <form className="mt-4 mr-0 mb-0 ml-0 min-w-0 flex flex-col flex-[1_1_0%] pr-[30px] pl-[38px]">
            <div className="m-0 min-w-0 flex items-center justify-between">
                <div className="pr-[10px]">
                    <div className="text-black font-bold font-montserrat">
                        Selected location
                    </div>
                    <div className="mt-[3%] text-black font-montserrat">
                        {selected?.address.county || selected?.address.state_district || selected?.address.state || null}, Kenya
                    </div>
                </div>
                <button
                    className="px-6 border border-white outline-none transition-[box-shadow,background-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] text-sm h-12 bg-[rgba(14,90,167,0.05)] rounded-[12px] flex items-center justify-center font-semibold leading-[20px] text-[rgb(14,90,167)]"
                    type="button"
                    onClick={() =>
                        switchSidebarDialog({
                            title: 'Complete details',
                            body: <AddShippingAddressForm select={selected} />,
                        })
                    }
                >Change</button>
            </div>
            <div className="m-0 min-w-0 flex flex-col items-end">
                <span className="font-montserrat font-normal text-sm leading-[20px] mt-[3%] mr-[-3%]">
                    *Required field
                </span>
            </div>
            <div className="m-0 min-w-0">
                <div className="m-0 min-w-0 pt-[20px]">
                    <FloatingLabelInput id="number" label="Number*" name="number" value={formData.number} onChange={handleChange} />
                </div>
                <div className="m-0 min-w-0 pt-[20px]">
                    <FloatingLabelInput id="building" label="Building*" name="building" value={formData.building} onChange={handleChange} />
                </div>
                <div className="m-0 min-w-0 pt-[20px]">
                    <FloatingLabelInput
                        id="street"
                        label="Street*"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                    />
                </div>
                <div className="m-0 min-w-0 pt-[20px]">
                    <FloatingLabelInput
                        id="area"
                        label="Area*"
                        name="area"
                        value={formData.area}
                        readonly={true}
                        onChange={handleChange}
                    />
                </div>
                <div className="m-0 min-w-0 pt-[20px]">
                    <FloatingLabelInput id="landmark" label="Closest Landmark" name="landmark" value={formData.landmark} onChange={handleChange} />
                </div>
                <div className="m-0 min-w-0 pt-[20px]">
                    <FloatingLabelInput id="instructions" label="Delivery Instructions" name="deliveryInstructions" value={formData.deliveryInstructions} onChange={handleChange} />
                </div>
            </div>
            <div className="mt-4 min-w-0">
                <p className="font-montserrat not-italic font-bold text-sm leading-5 text-black">Address Label (optional)</p>
                <div className="mt-3 min-w-0 flex">
                    <div className="p-3 capitalize m-0 min-w-0 flex flex-row">
                        <div className="m-0 min-w-0">
                            <div className="m-0 min-w-0 flex items-center">
                                <input type="radio" className="accent-[#0e5aa7] w-[15px] h-[15px] align-middle relative mr-[10px]" name="addressLabel" value="home" onChange={handleChange} checked={formData.addressLabel === 'home'} />home
                            </div>
                        </div>
                    </div>
                    <div className="p-3 capitalize m-0 min-w-0 flex flex-row">
                        <div className="m-0 min-w-0">
                            <div className="m-0 min-w-0 flex items-center">
                                <input type="radio" className="accent-[#0e5aa7] w-[15px] h-[15px] align-middle relative mr-[10px]" name="addressLabel" value="office" onChange={handleChange} checked={formData.addressLabel === 'office'} />office
                            </div>
                        </div>
                    </div>
                    <div className="p-3 capitalize m-0 min-w-0 flex flex-row">
                        <div className="m-0 min-w-0">
                            <div className="m-0 min-w-0 flex items-center">
                                <input type="radio" className="accent-[#0e5aa7] w-[15px] h-[15px] align-middle relative mr-[10px]" name="addressLabel" value="other" onChange={handleChange} checked={formData.addressLabel === 'other'} />other
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 min-w-0">
                <p className="font-montserrat not-italic font-bold text-sm leading-5 text-black">Receiver Information</p>
                <FloatingLabelInput id="receiver_name" label="Receiver name*" name="fullName" value={formData.fullName} onChange={handleChange} />
            </div>
            <div className="m-0 min-w-0 flex justify-between">
                <div className="m-0 min-w-0 w-1/4 flex">
                    <FloatingLabelInput id="country" name="country" value={formData.country} label="Country*" readonly={true} className="pl-[45px]" onChange={handleChange}>
                        <div className="absolute max-h-8 overflow-hidden left-4">
                            <svg id="Kenya" viewBox="0 0 40 40" className="w-[24px] h-[24px]">
                                <circle cx="19" cy="19" r="19" fill="white"></circle>
                                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="38" height="38">
                                    <circle cx="19" cy="19" r="19" fill="white"></circle>
                                </mask>
                                <g mask="url(#mask0)"><rect x="-6" y="-5" width="52" height="16" fill="black"></rect>
                                    <rect x="-11" y="27" width="57" height="16" fill="#006600"></rect>
                                    <path d="M11 32.7883L11.4827 33.0698L24.4919 9.7817C25.2469 9.57697 25.6678 8.82202 26.0886 8.07988C26.3609 7.58085 27.4749 5.58472 27.9577 3C26.0267 4.72741 24.9127 6.72354 24.6404 7.22257C24.2195 7.96472 23.8111 8.71966 24.0091 9.50019L11 32.7883Z" fill="white"></path>
                                    <path d="M25.958 32.7883L25.4753 33.0698L12.4661 9.7817C11.7111 9.57697 11.2903 8.82202 10.8694 8.07988C10.5971 7.58085 9.48309 5.58472 9.00035 3C10.9313 4.72741 12.0453 6.72354 12.3176 7.22257C12.7385 7.96472 13.1469 8.71966 12.9489 9.50019L25.958 32.7883Z" fill="white"></path>
                                    <path d="M-15 12.5V25.5H13.1965C14.0321 27.6655 16.825 32 18.5 32C20.175 32 22.9679 27.6655 23.8035 25.5H52V12.5H23.8035C22.9679 10.3346 20.175 6 18.5 6C16.825 6 14.0321 10.3346 13.1965 12.5H-15Z" fill="#BB0000"></path><path d="M19 20C19 20 20 22.0974 20 25.5C20 28.9025 19 31 19 31V20Z" fill="white"></path>
                                    <path d="M18 18.4912C18 18.4912 17 16.3024 17 12.7517C17 9.20096 18 7 18 7V18.4912Z" fill="white"></path>
                                    <path d="M18 31C18 31 17 28.9025 17 25.5C17 22.0974 18 20 18 20L18 31Z" fill="white"></path>
                                    <path d="M19 6.99989C19 6.99989 20 9.18869 20 12.7394C20 16.2901 19 18.4911 19 18.4911V6.99989Z" fill="white"></path>
                                </g>
                                <path d="M18.5 18C18.2239 18 18 18.4477 18 19C18 19.5523 18.2239 20 18.5 20C18.7761 20 19 19.5523 19 19C19 18.4477 18.7761 18 18.5 18Z" fill="white"></path>
                                <g clipPath="url(#clip0)">
                                    <path d="M24.12 23.8C24.8 22 25.25 20.2 25.25 18.4C25.25 16.6 24.8 14.8 24.12 13C23.45 14.8 23 16.6 23 18.4C23 20.2 23.45 22 24.12 23.8Z" fill="black"></path>
                                </g>
                                <g clipPath="url(#clip1)">
                                    <path d="M13.12 23.8C13.8 22 14.25 20.2 14.25 18.4C14.25 16.6 13.8 14.8 13.12 13C12.45 14.8 12 16.6 12 18.4C12 20.2 12.45 22 13.12 23.8Z" fill="black"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="2.25" height="10.8" fill="white" transform="translate(23 13)"></rect>
                                    </clipPath>
                                    <clipPath id="clip1">
                                        <rect width="2.25" height="10.8" fill="white" transform="translate(12 13)"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </FloatingLabelInput>
                </div>
                <div className="m-0 min-w-0 w-[70%]">
                    <FloatingLabelInput id="phone" label="Phone number*" name="phone" value={formData.phone} autoComplete="tel" onChange={handleChange} />
                </div>
            </div>
            <div className="mt-[37px] mx-0 ml-[-37px] min-w-0 flex flex-col relative bottom-0 shadow-[0_4px_15px_rgba(0,0,0,0.15)] w-[118%] h-[80px]">
                <div className="m-0 min-w-0 flex flex-row justify-evenly">
                    <a className="text-[#0e5aa7] normal-case no-underline cursor-pointer outline-none rounded text-sm h-12 font-semibold font-montserrat mt-[2%] px-[25px] py-[25px] transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
                        Back
                    </a>
                    <button
                        type="button"
                        className={`px-6 border border-white outline-none transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] text-sm normal-case ${isFormValid || !loading ? 'opacity-100' : 'opacity-10 pointer-events-none'} text-white font-bold h-12 w-[202px] font-montserrat rounded-lg flex items-center justify-center mt-3.5 leading-5 bg-[#0e5aa7]`}
                        disabled={!isFormValid || loading}
                        onClick={handleSubmit}>
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}