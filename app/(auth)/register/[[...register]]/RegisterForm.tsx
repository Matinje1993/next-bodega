'use client';

import React, { useState } from 'react';
import LabelInput from "@/components/ui/LabelInput";
import { signIn } from 'next-auth/react'
import Link from 'next/link';

export default function RegisterForm() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        countryCode: '+254',
        phoneNumber: '',
        subscribe: false,
        acceptedTerms: false,
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!form.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!form.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email';

        if (!form.password.trim()) newErrors.password = 'Password is required';
        else if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

        if (!form.countryCode.trim()) newErrors.countryCode = 'Country code is required';
        if (!form.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';

        if (!form.acceptedTerms) newErrors.acceptedTerms = 'You must accept the terms';

        return newErrors;
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setSubmitting(true);
        try {
            const res = await fetch('/api/v1/register', {
                method: 'POST',
                body: JSON.stringify(form),
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await res.json();

            if (res.ok) {
                await signIn('credentials', {
                    email: form.email,
                    password: form.password,
                    callbackUrl: '/',
                })
            }
            else {
                setErrors({ form: data.error || 'Registration failed' });
            }
        } catch (err: any) {
            setErrors({ form: 'Something went wrong' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <ul className="bg-[#F7F8F9] rounded-[24px] w-[100vw] min-w-[280px] sm:min-w-[600px] max-w-[610px] h-[684px] overflow-hidden relative m-[20px_0px] transition-[height] duration-[0.4s] ease-[cubic-bezier(0.88,-0.35,0.565,1.35)] px-[48px] py-[24px] xs:w-[100vw] sm:w-[initial] shadow-none">
            <div className="font-montserrat font-bold text-[20px] leading-[28px] text-center text-black">Create new account</div>
            <div className="m-0 min-w-0 px-[15px] mt-[20px] max-h-[568px] overflow-y-auto overflow-x-hidden [scrollbar-color:#dcdcdc_transparent]">
                <div className="m-0 min-w-0 flex flex-col">
                    <div className="m-0 min-w-0 flex justify-between">
                        <div className="m-0 min-w-0 p-[5px] w-1/2">
                            <LabelInput id="firstName" label="First name" name="firstName" className="bg-white" value={form.firstName}
                                onChange={handleChange} />
                        </div>
                        <div className="m-0 min-w-0 p-[5px] w-1/2">
                            <LabelInput id="lastName" label="Last name" name="lastName" className="bg-white" value={form.lastName}
                                onChange={handleChange} />
                        </div>
                    </div>
                    {(errors.firstName || errors.lastName) && <div className="m-0 min-w-0 mx-[5px] flex">
                        <div className="m-0 min-w-0 flex items-center gap-1.5 mt-1.5">
                            <div className="grid place-items-center">
                                <svg id="HintIcon" width="20" height="20" viewBox="0 0 20 20" className="w-[16px] h-[16px]"><path d="M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.41489 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1226 6.84586 16.2658 4.78065 14.7426 3.25744C13.2194 1.73424 11.1541 0.877432 9 0.875V0.875ZM8.375 5.25C8.375 5.08424 8.44085 4.92527 8.55806 4.80806C8.67527 4.69085 8.83424 4.625 9 4.625C9.16576 4.625 9.32474 4.69085 9.44195 4.80806C9.55916 4.92527 9.625 5.08424 9.625 5.25V9.625C9.625 9.79076 9.55916 9.94973 9.44195 10.0669C9.32474 10.1842 9.16576 10.25 9 10.25C8.83424 10.25 8.67527 10.1842 8.55806 10.0669C8.44085 9.94973 8.375 9.79076 8.375 9.625V5.25ZM9 13.375C8.81458 13.375 8.63333 13.32 8.47916 13.217C8.32499 13.114 8.20482 12.9676 8.13387 12.7963C8.06291 12.625 8.04434 12.4365 8.08052 12.2546C8.11669 12.0727 8.20598 11.9057 8.33709 11.7746C8.4682 11.6435 8.63525 11.5542 8.81711 11.518C8.99896 11.4818 9.18746 11.5004 9.35877 11.5714C9.53007 11.6423 9.67649 11.7625 9.77951 11.9167C9.88252 12.0708 9.9375 12.2521 9.9375 12.4375C9.9375 12.6861 9.83873 12.9246 9.66292 13.1004C9.4871 13.2762 9.24864 13.375 9 13.375Z" fill="#CE3637"></path></svg>
                            </div>
                            <p className="font-normal text-[12px] leading-4 text-[#CE3637]">Please enter your full name.</p>
                        </div>
                    </div>}
                    <div className="m-0 min-w-0 p-[5px]">
                        <LabelInput id="email" label="Email address" name="email" className="bg-white" value={form.email}
                            onChange={handleChange} />
                    </div>
                    {errors.email && <div className="m-0 min-w-0 mx-[5px] flex">
                        <div className="m-0 min-w-0 flex items-center gap-1.5 mt-1.5">
                            <div className="grid place-items-center">
                                <svg id="HintIcon" width="20" height="20" viewBox="0 0 20 20" className="w-[16px] h-[16px]"><path d="M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.41489 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1226 6.84586 16.2658 4.78065 14.7426 3.25744C13.2194 1.73424 11.1541 0.877432 9 0.875V0.875ZM8.375 5.25C8.375 5.08424 8.44085 4.92527 8.55806 4.80806C8.67527 4.69085 8.83424 4.625 9 4.625C9.16576 4.625 9.32474 4.69085 9.44195 4.80806C9.55916 4.92527 9.625 5.08424 9.625 5.25V9.625C9.625 9.79076 9.55916 9.94973 9.44195 10.0669C9.32474 10.1842 9.16576 10.25 9 10.25C8.83424 10.25 8.67527 10.1842 8.55806 10.0669C8.44085 9.94973 8.375 9.79076 8.375 9.625V5.25ZM9 13.375C8.81458 13.375 8.63333 13.32 8.47916 13.217C8.32499 13.114 8.20482 12.9676 8.13387 12.7963C8.06291 12.625 8.04434 12.4365 8.08052 12.2546C8.11669 12.0727 8.20598 11.9057 8.33709 11.7746C8.4682 11.6435 8.63525 11.5542 8.81711 11.518C8.99896 11.4818 9.18746 11.5004 9.35877 11.5714C9.53007 11.6423 9.67649 11.7625 9.77951 11.9167C9.88252 12.0708 9.9375 12.2521 9.9375 12.4375C9.9375 12.6861 9.83873 12.9246 9.66292 13.1004C9.4871 13.2762 9.24864 13.375 9 13.375Z" fill="#CE3637"></path></svg>
                            </div>
                            <p className="font-normal text-[12px] leading-4 text-[#CE3637]">{errors.email}</p>
                        </div>
                    </div>}
                    <div className="m-0 min-w-0 flex justify-between">
                        <div className="m-0 min-w-0 p-[5px] w-[107px]">
                            <LabelInput id="countryCode" name="countryCode" value={form.countryCode}
                                onChange={handleChange} label="Country" readonly={true} disabled={true} className="pl-[45px] bg-white">
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
                            </LabelInput>
                        </div>
                        <div className="m-0 min-w-0 p-[5px] w-3/4">
                            <LabelInput id="phoneNumber" label="Phone number" name="phoneNumber" className="bg-white" value={form.phoneNumber}
                                onChange={handleChange} />
                        </div>
                    </div>
                    {errors.phoneNumber && <div className="m-0 min-w-0 mx-[5px] flex">
                        <div className="m-0 min-w-0 flex items-center gap-1.5 mt-1.5">
                            <div className="grid place-items-center">
                                <svg id="HintIcon" width="20" height="20" viewBox="0 0 20 20" className="w-[16px] h-[16px]"><path d="M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.41489 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1226 6.84586 16.2658 4.78065 14.7426 3.25744C13.2194 1.73424 11.1541 0.877432 9 0.875V0.875ZM8.375 5.25C8.375 5.08424 8.44085 4.92527 8.55806 4.80806C8.67527 4.69085 8.83424 4.625 9 4.625C9.16576 4.625 9.32474 4.69085 9.44195 4.80806C9.55916 4.92527 9.625 5.08424 9.625 5.25V9.625C9.625 9.79076 9.55916 9.94973 9.44195 10.0669C9.32474 10.1842 9.16576 10.25 9 10.25C8.83424 10.25 8.67527 10.1842 8.55806 10.0669C8.44085 9.94973 8.375 9.79076 8.375 9.625V5.25ZM9 13.375C8.81458 13.375 8.63333 13.32 8.47916 13.217C8.32499 13.114 8.20482 12.9676 8.13387 12.7963C8.06291 12.625 8.04434 12.4365 8.08052 12.2546C8.11669 12.0727 8.20598 11.9057 8.33709 11.7746C8.4682 11.6435 8.63525 11.5542 8.81711 11.518C8.99896 11.4818 9.18746 11.5004 9.35877 11.5714C9.53007 11.6423 9.67649 11.7625 9.77951 11.9167C9.88252 12.0708 9.9375 12.2521 9.9375 12.4375C9.9375 12.6861 9.83873 12.9246 9.66292 13.1004C9.4871 13.2762 9.24864 13.375 9 13.375Z" fill="#CE3637"></path></svg>
                            </div>
                            <p className="font-normal text-[12px] leading-4 text-[#CE3637]">{errors.phoneNumber}</p>
                        </div>
                    </div>}
                    <div className="m-0 min-w-0 p-[5px]">
                        <LabelInput type="password" id="password" label="Password" name="password" className="bg-white" value={form.password}
                            onChange={handleChange} />
                    </div>
                    {errors.password && <div className="m-0 min-w-0 mx-[5px] flex">
                        <div className="m-0 min-w-0 flex items-center gap-1.5 mt-1.5">
                            <div className="grid place-items-center">
                                <svg id="HintIcon" width="20" height="20" viewBox="0 0 20 20" className="w-[16px] h-[16px]"><path d="M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.41489 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1226 6.84586 16.2658 4.78065 14.7426 3.25744C13.2194 1.73424 11.1541 0.877432 9 0.875V0.875ZM8.375 5.25C8.375 5.08424 8.44085 4.92527 8.55806 4.80806C8.67527 4.69085 8.83424 4.625 9 4.625C9.16576 4.625 9.32474 4.69085 9.44195 4.80806C9.55916 4.92527 9.625 5.08424 9.625 5.25V9.625C9.625 9.79076 9.55916 9.94973 9.44195 10.0669C9.32474 10.1842 9.16576 10.25 9 10.25C8.83424 10.25 8.67527 10.1842 8.55806 10.0669C8.44085 9.94973 8.375 9.79076 8.375 9.625V5.25ZM9 13.375C8.81458 13.375 8.63333 13.32 8.47916 13.217C8.32499 13.114 8.20482 12.9676 8.13387 12.7963C8.06291 12.625 8.04434 12.4365 8.08052 12.2546C8.11669 12.0727 8.20598 11.9057 8.33709 11.7746C8.4682 11.6435 8.63525 11.5542 8.81711 11.518C8.99896 11.4818 9.18746 11.5004 9.35877 11.5714C9.53007 11.6423 9.67649 11.7625 9.77951 11.9167C9.88252 12.0708 9.9375 12.2521 9.9375 12.4375C9.9375 12.6861 9.83873 12.9246 9.66292 13.1004C9.4871 13.2762 9.24864 13.375 9 13.375Z" fill="#CE3637"></path></svg>
                            </div>
                            <p className="font-normal text-[12px] leading-4 text-[#CE3637]">{errors.password}</p>
                        </div>
                    </div>}
                    <div className="m-0 min-w-0 flex p-[5px] gap-2 items-center">
                        <label>
                            <div className="inline-block align-middle">
                                <input name="subscribe" className="peer clip-[rect(0,0,0,0)] [clip-path:inset(50%)] h-[1px] m-[-1px] overflow-hidden p-0 absolute whitespace-nowrap w-[1px]" type="checkbox" checked={form.subscribe}
                                    onChange={handleChange} />
                                <div className={`inline-block w-4 h-4 ${form.subscribe ? 'bg-[#0e5aa7]' : 'bg-[#FAFAFA]'} rounded-[3px] border border-[#4D4D4D]`}>
                                    <svg data-testid="icon" viewBox="0 0 24 24" className={`fill-none stroke-white stroke-[3px] ${form.subscribe ? 'visible' : 'invisible'}`}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    <div className="bg-black"></div>
                                </div>
                            </div>
                        </label>
                        <div className="font-normal font-montserrat text-[12px] leading-[16px] text-black">I would like to receive news and offers from Bodega.</div>
                    </div>
                    <div className="m-0 min-w-0 flex p-[5px] gap-2 items-center">
                        <label>
                            <div className="inline-block align-middle">
                                <input name="acceptedTerms" className="clip-[rect(0,0,0,0)] [clip-path:inset(50%)] h-[1px] m-[-1px] overflow-hidden p-0 absolute whitespace-nowrap w-[1px]" type="checkbox" checked={form.acceptedTerms}
                                    onChange={handleChange} />
                                <div className={`inline-block w-4 h-4 ${form.acceptedTerms ? 'bg-[#0e5aa7]' : 'bg-[#FAFAFA]'} rounded-[3px] border border-[#4D4D4D]`}>
                                    <svg data-testid="icon" viewBox="0 0 24 24" className={`fill-none stroke-white stroke-[3px] ${form.acceptedTerms ? 'visible' : 'invisible'}`}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    <div className="bg-black"></div>
                                </div>
                            </div>
                        </label>
                        <div className="font-normal font-montserrat text-[12px] leading-[16px] text-black"> I agree to the&nbsp;
                            <a className="text-[#0E5AA7] text-[12px] leading-[16px] font-normal font-montserrat cursor-pointer no-underline outline-none rounded transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] h-12 w-auto" href="/termsandconditions" target="_blank">terms and conditions </a>as well as to our
                            <a className="text-[#0E5AA7] text-[12px] leading-[16px] font-normal font-montserrat cursor-pointer no-underline outline-none rounded transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] h-12 w-auto" href="#" target="_blank"> Privacy Policy.</a>
                        </div>
                    </div>
                    {errors.acceptedTerms && <div className="m-0 min-w-0 mx-[5px] flex">
                        <div className="m-0 min-w-0 flex items-center gap-1.5 mt-1.5">
                            <div className="grid place-items-center">
                                <svg id="HintIcon" width="20" height="20" viewBox="0 0 20 20" className="w-[16px] h-[16px]"><path d="M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.41489 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1226 6.84586 16.2658 4.78065 14.7426 3.25744C13.2194 1.73424 11.1541 0.877432 9 0.875V0.875ZM8.375 5.25C8.375 5.08424 8.44085 4.92527 8.55806 4.80806C8.67527 4.69085 8.83424 4.625 9 4.625C9.16576 4.625 9.32474 4.69085 9.44195 4.80806C9.55916 4.92527 9.625 5.08424 9.625 5.25V9.625C9.625 9.79076 9.55916 9.94973 9.44195 10.0669C9.32474 10.1842 9.16576 10.25 9 10.25C8.83424 10.25 8.67527 10.1842 8.55806 10.0669C8.44085 9.94973 8.375 9.79076 8.375 9.625V5.25ZM9 13.375C8.81458 13.375 8.63333 13.32 8.47916 13.217C8.32499 13.114 8.20482 12.9676 8.13387 12.7963C8.06291 12.625 8.04434 12.4365 8.08052 12.2546C8.11669 12.0727 8.20598 11.9057 8.33709 11.7746C8.4682 11.6435 8.63525 11.5542 8.81711 11.518C8.99896 11.4818 9.18746 11.5004 9.35877 11.5714C9.53007 11.6423 9.67649 11.7625 9.77951 11.9167C9.88252 12.0708 9.9375 12.2521 9.9375 12.4375C9.9375 12.6861 9.83873 12.9246 9.66292 13.1004C9.4871 13.2762 9.24864 13.375 9 13.375Z" fill="#CE3637"></path></svg>
                            </div>
                            <p className="font-normal text-[12px] leading-4 text-[#CE3637]">{errors.acceptedTerms}</p>
                        </div>
                    </div>}
                    {errors.form && <div className="m-0 min-w-0 mx-[5px] flex">
                        <div className="m-0 min-w-0 flex items-center gap-1.5 mt-1.5">
                            <div className="grid place-items-center">
                                <svg id="HintIcon" width="20" height="20" viewBox="0 0 20 20" className="w-[16px] h-[16px]"><path d="M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.41489 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1226 6.84586 16.2658 4.78065 14.7426 3.25744C13.2194 1.73424 11.1541 0.877432 9 0.875V0.875ZM8.375 5.25C8.375 5.08424 8.44085 4.92527 8.55806 4.80806C8.67527 4.69085 8.83424 4.625 9 4.625C9.16576 4.625 9.32474 4.69085 9.44195 4.80806C9.55916 4.92527 9.625 5.08424 9.625 5.25V9.625C9.625 9.79076 9.55916 9.94973 9.44195 10.0669C9.32474 10.1842 9.16576 10.25 9 10.25C8.83424 10.25 8.67527 10.1842 8.55806 10.0669C8.44085 9.94973 8.375 9.79076 8.375 9.625V5.25ZM9 13.375C8.81458 13.375 8.63333 13.32 8.47916 13.217C8.32499 13.114 8.20482 12.9676 8.13387 12.7963C8.06291 12.625 8.04434 12.4365 8.08052 12.2546C8.11669 12.0727 8.20598 11.9057 8.33709 11.7746C8.4682 11.6435 8.63525 11.5542 8.81711 11.518C8.99896 11.4818 9.18746 11.5004 9.35877 11.5714C9.53007 11.6423 9.67649 11.7625 9.77951 11.9167C9.88252 12.0708 9.9375 12.2521 9.9375 12.4375C9.9375 12.6861 9.83873 12.9246 9.66292 13.1004C9.4871 13.2762 9.24864 13.375 9 13.375Z" fill="#CE3637"></path></svg>
                            </div>
                            <p className="font-normal text-[12px] leading-4 text-[#CE3637]">{errors.form}</p>
                        </div>
                    </div>}
                    <div className="m-0 min-w-0 inline-flex relative w-full">
                        <button className="px-6 border border-white outline-none transition-shadow transition-bg duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] text-[14px] normal-case cursor-pointer font-montserrat font-bold text-white h-12 w-[504px] rounded-[12px] flex flex-row items-center justify-center mt-[18px] leading-[20px] bg-[#0E5AA7]" type="button" onClick={handleSubmit}>Register</button>
                    </div>
                    <div className="m-0 min-w-0 flex flex-row justify-center py-5">
                        <div className="font-normal font-montserrat text-[14px] leading-[20px] text-[#1f1f1f]">Already Have an account?</div>
                        <Link href="/login" className="font-montserrat font-bold text-[14px] leading-[20px] text-[#0e5aa7] cursor-pointer ml-2.5">Login</Link>
                    </div>
                </div>
            </div>
        </ul>
    );
}