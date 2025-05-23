"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from 'next/navigation';

export default function SortDropdown({
  sortBy,
  onChangeSortBy
}: {
  sortBy: string;
  onChangeSortBy: (newSortBy: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isActive = (key: string) => sortBy === key;

  const toggleDropdown = () => setOpen((prev) => !prev);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Handle item click: close dropdown and call onSelect callback if provided
  const handleItemClick = (item: string) => {
    setOpen(false);
    if (sortBy === item) return;
    onChangeSortBy(item);
  };

  return (
    <div className="m-0 min-w-0 bg-white flex flex-col xs:w-1/2 h-12 rounded-[12px] block sm:w-[202px]" ref={dropdownRef}>
      <div className="my-auto">
        <div className="cursor-pointer relative inline-block m-0 w-[200px]">
          <div className="m-0 min-w-0 flex flex-col justify-center h-[50px] w-full text-[rgb(77,77,77)] bg-white p-0 rounded-[12px]" onClick={toggleDropdown}>
            <div className="flex items-center px-4 py-0 m-0 min-w-0 justify-between">
              <span className="max-w-[145px] text-[#0e5aa7] font-semibold m-0 h-[20px] pt-[3px] whitespace-nowrap overflow-hidden text-ellipsis m-0 min-w-0 text-[14px]">
                Sort by:
              </span>
              <div className="flex items-center px-4 py-0 absolute overflow-hidden right-[6px] top-[15px]">
                <svg viewBox="0 0 24 24" strokeWidth="3" className="w-[20px] h-[20px]"><path fill="none" stroke="#0E5AA7" strokeWidth="3" strokeLinejoin="round" d="M22 7.19l-9.873 9.873L2 6.937"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
              </div>
            </div>
          </div>
          {open && (<ul className="absolute right-[-2px] text-left max-h-none w-[220px] p-0 z-[4] rounded-[12px] list-none bg-white shadow-md overflow-auto scroll-auto">
            <li className={`px-4 text-base text-black font-normal rounded-none h-12 flex items-center cursor-pointer hover:bg-[rgb(244,244,244)] ${isActive('relevance') ? 'bg-[rgb(244,244,244)]' : ''}`} onClick={() => handleItemClick('relevance')}>Relevance</li>
            <li className={`px-4 text-base text-black font-normal rounded-none h-12 flex items-center cursor-pointer hover:bg-[rgb(244,244,244)] ${isActive('price_asc') ? 'bg-[rgb(244,244,244)]' : ''}`} onClick={() => handleItemClick('price_asc')}>Price (lowest first)</li>
            <li className={`px-4 text-base text-black font-normal rounded-none h-12 flex items-center cursor-pointer hover:bg-[rgb(244,244,244)] ${isActive('price_desc') ? 'bg-[rgb(244,244,244)]' : ''}`} onClick={() => handleItemClick('price_desc')}>Price (highest first)</li>
          </ul>)}
        </div>
      </div>
    </div>
  );
};
