"use client";

import { useMenu } from "@/providers/menu-provider";

const DrawerMenuButton = () => {
  const { isOpen, toggleMenu } = useMenu();

  return (
    <button className="h-[27px] w-[27px] bg-white/20 border-0 p-0" onClick={toggleMenu}>
      <i className="bg-[#0E5AA7] block h-[2px] mx-1 before:content-[''] before:block before:lg:hidden before:h-[2px] before:bg-[#0E5AA7] before:-translate-y-[6px] before:mt-[-1px] after:content-[''] after:block after:lg:hidden after:h-[2px] after:bg-[#0E5AA7] after:translate-y-[6px] after:mt-[-1px]"></i>
    </button>
  );
};

export default DrawerMenuButton;