"use client";
import { cn } from "@/lib/utils";

type Props = {
    className?: string;
};

const NavbarSearch: React.FC<Props> = ({ className }) => {

    return (
        <div className={cn(
            "flex-grow relative box-border m-0 min-w-0",
            className
        )}>
            <div className="flex items-center justify-between relative animate-[fade-in_0.2s_ease-in-out] rounded-[48px_48px_48px_48px] bg-[#F5F5F5] box-border m-0 min-w-0 h-full">
                <a className="flex items-center justify-center w-[40px] text-center cursor-pointer bg-transparent rounded-br-[48px] rounded-tr-[48px] pl-[16px]"><svg viewBox="0 0 16 16" id="Search" className="w-[22px] h-[15px]"><path d="M8.28585 0.678589C12.4872 0.678589 15.893 4.08442 15.893 8.28573C15.893 10.1163 15.2464 11.7959 14.1691 13.1085L17.0305 15.9697C17.3234 16.2626 17.3234 16.7375 17.0305 17.0303C16.7642 17.2966 16.3475 17.3208 16.0539 17.103L15.9698 17.0303L13.1086 14.169C11.796 15.2463 10.1164 15.8929 8.28585 15.8929C4.08454 15.8929 0.678711 12.487 0.678711 8.28573C0.678711 4.08442 4.08454 0.678589 8.28585 0.678589ZM8.28585 2.17859C4.91297 2.17859 2.17871 4.91285 2.17871 8.28573C2.17871 11.6586 4.91297 14.3929 8.28585 14.3929C9.86997 14.3929 11.3132 13.7897 12.3985 12.8006L12.6035 12.6034C13.7117 11.4939 14.393 9.96937 14.393 8.28573C14.393 4.91285 11.6587 2.17859 8.28585 2.17859Z" fill="#747474"></path></svg></a>
                <input name="inputText" type="text" placeholder="Search for products" autoComplete="off" className="box-border m-0 min-w-0 border-0 outline-none p-[11px_20px] align-middle w-full cursor-pointer caret-transparent bg-transparent text-[12px] text-[#0E5AA7] h-10 leading-[26px]" defaultValue="" />
            </div>
        </div>
    );
};

export default NavbarSearch;