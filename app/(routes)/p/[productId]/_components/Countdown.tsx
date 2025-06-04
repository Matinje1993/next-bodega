"use client";

import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const update = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("");
        clearInterval(timer);
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(` ${hours}H : ${minutes}M : ${seconds}S`);
    };

    update();
    timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return <span>{timeLeft}</span>;
};

export default Countdown;