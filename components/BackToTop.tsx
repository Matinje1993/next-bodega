"use client"; // Only for Next.js App Router (not needed in `pages/` dir)

import { useState, useEffect } from "react";

const BackToTop: React.FC = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div onClick={scrollToTop} className="bg-[rgb(10,67,124)] w-full font-medium p-4 text-center cursor-pointer text-sm">
        <p className="text-white">BACK TO TOP</p>
    </div>
  );
};

export default BackToTop;