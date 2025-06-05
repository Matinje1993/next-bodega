'use client';

import React, { useState } from 'react';
import LabelInput from "@/components/ui/LabelInput";
import Link from "next/link";
import LinearProgress from '@mui/material/LinearProgress';
import { useRouter } from 'next/navigation';

export default function LoginForm({ email, redirect }: { email: string; redirect?: string }) {
    const router = useRouter();
    const [form, setForm] = useState({
        email: email,
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

        if (!form.email.trim()) newErrors.email = 'Please enter an email address and continue';
        else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Please enter a valid email address';

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setSubmitting(true);
        try {
            const res = await fetch('/api/v1/validateEmail', {
                method: 'POST',
                body: JSON.stringify(form),
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await res.json();

            if (!res.ok) {
                setErrors({ email: data.error || 'Something went wrong' });
            }
            if (data.exists) {
                const query = new URLSearchParams({ email: form.email });
                if (redirect) {
                    query.append('redirect', redirect);
                }
                router.push(`/login/password?${query.toString()}`);
            }
            else {
                setErrors({ email: data.error || 'We could not find your account, please check you email address and try again' });
            }
        } catch (err: any) {
            setErrors({ email: 'Something went wrong' });
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <ul className="bg-[#F7F8F9] rounded-[24px] my-5 overflow-hidden h-[365px] transition-[height] duration-400 ease-[cubic-bezier(0.88,-0.35,0.565,1.35)] w-screen px-12 py-6 sm:w-auto shadow-none min-w-[280px] max-w-[610px] sm:min-w-[600px]">
            <div className="m-0 min-w-0 flex flex-col justify-center items-center mt-[25px] mb-1">
                <div className="font-montserrat font-extrabold text-[20px] text-black">
                    Get access to over 190,000 quality products
                </div>
            </div>
            <form onSubmit={handleSubmit} >
                <div className="mt-[45px]">
                    <LabelInput id="email" label="Email address" name="email" className="bg-white" value={form.email}
                        onChange={handleChange} />
                    {errors.email && <div className="m-0 min-w-0 mx-[5px] flex">
                        <div className="m-0 min-w-0 flex items-center gap-1.5 mt-1.5">
                            <div className="grid place-items-center">
                                <svg id="HintIcon" width="20" height="20" viewBox="0 0 20 20" className="w-[16px] h-[16px]"><path d="M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.41489 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1226 6.84586 16.2658 4.78065 14.7426 3.25744C13.2194 1.73424 11.1541 0.877432 9 0.875V0.875ZM8.375 5.25C8.375 5.08424 8.44085 4.92527 8.55806 4.80806C8.67527 4.69085 8.83424 4.625 9 4.625C9.16576 4.625 9.32474 4.69085 9.44195 4.80806C9.55916 4.92527 9.625 5.08424 9.625 5.25V9.625C9.625 9.79076 9.55916 9.94973 9.44195 10.0669C9.32474 10.1842 9.16576 10.25 9 10.25C8.83424 10.25 8.67527 10.1842 8.55806 10.0669C8.44085 9.94973 8.375 9.79076 8.375 9.625V5.25ZM9 13.375C8.81458 13.375 8.63333 13.32 8.47916 13.217C8.32499 13.114 8.20482 12.9676 8.13387 12.7963C8.06291 12.625 8.04434 12.4365 8.08052 12.2546C8.11669 12.0727 8.20598 11.9057 8.33709 11.7746C8.4682 11.6435 8.63525 11.5542 8.81711 11.518C8.99896 11.4818 9.18746 11.5004 9.35877 11.5714C9.53007 11.6423 9.67649 11.7625 9.77951 11.9167C9.88252 12.0708 9.9375 12.2521 9.9375 12.4375C9.9375 12.6861 9.83873 12.9246 9.66292 13.1004C9.4871 13.2762 9.24864 13.375 9 13.375Z" fill="#CE3637"></path></svg>
                            </div>
                            <p className="font-normal text-[12px] leading-4 text-[#CE3637]">{errors.email}</p>
                        </div>
                    </div>}
                </div>
                <div className="m-0 min-w-0 inline-flex relative w-full">
                    <button className="px-6 text-transform-none text-white bg-[#0e5aa7] border border-white outline-none transition duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-xl text-sm w-[504px] h-12 flex flex-row items-center justify-center mt-[18px] leading-5 font-montserrat font-bold" type="submit" disabled={submitting}>
                        Login
                        {submitting && <div className="absolute inset-0 bg-white/60 z-[1]">
                            <div className="absolute left-0 right-0 top-0">
                                <LinearProgress
                                    sx={{
                                        height: '3px',
                                        backgroundColor: 'rgba(0,0,0,0.1)', // track color
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#0e5aa7', // progress bar color
                                        },
                                    }}
                                />
                            </div>
                        </div>}
                    </button>
                </div>
            </form>
            <div className="flex flex-col items-center pt-5 m-0 min-w-0">
                <div className="font-normal font-montserrat text-base text-[#1f1f1f]">New to Bodega?</div>
                <Link href="/register" className="font-montserrat font-bold pt-2 text-base text-[#0e5aa7] cursor-pointer">Sign up for a new account</Link>
            </div>
        </ul>
    );
}