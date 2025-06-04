'use client';

import { useState, ReactNode, InputHTMLAttributes } from 'react';

type FloatingLabelInputProps = {
    id: string;
    label: string;
    type?: string;
    value?: string;
    readonly?: boolean;
    children?: ReactNode;
    className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function FloatingLabelInput({
    id,
    label,
    type = 'text',
    value = '',
    readonly = false,
    children,
    className = 'pl-[18px]',
    ...props
}: FloatingLabelInputProps) {
    const [focused, setFocused] = useState(false);

    const isLabelFloated = focused || value !== '';
    return (
        <div className={`relative ${readonly ? 'opacity-60' : 'opacity-100'} mt-[16px]`}>
            <div className="m-0 min-w-0 flex items-center">
                <input
                    type={type}
                    id={id}
                    value={value}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    readOnly={readonly}
                    className={`px-3 pr-3 pt-[14px] pb-[14px] ${className} bg-transparent block w-full h-12 outline-none font-montserrat font-normal text-base leading-5 ${readonly ? 'text-[#747474]' : 'text-black'} border ${isLabelFloated && !readonly ? 'border-[#747474]' : 'border-[#dcdcdc]'} rounded`}
                    {...props}
                />
                {children}
            </div>
            <label className={`absolute pointer-events-none transition-all font-montserrat font-normal leading-5 max-w-full overflow-hidden text-ellipsis whitespace-nowrap left-[8px] bg-white text-[#747474] px-[11px] ${isLabelFloated ? 'text-sm top-[-7px] py-0' : 'text-base top-2 py-1'}`}>{label}</label>
        </div>
    );
}