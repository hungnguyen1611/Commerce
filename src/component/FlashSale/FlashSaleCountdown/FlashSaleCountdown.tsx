"use client";

import React, { useEffect, useState } from "react";
import styles from "./FlashSaleCountdown.module.css";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

export default function FlashSaleCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Thời gian kết thúc flash sale
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 12); // ví dụ 12h từ giờ

    const interval = setInterval(() => {
      const now = new Date();
      const diff = Math.max(0, endTime.getTime() - now.getTime());

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className={styles.flashSale}>
      <span className={styles.label}>Flash Sale</span>
      <div className={styles.countdown}>
        <span className={styles.time}>{format(timeLeft.hours)}</span>:
        <span className={styles.time}>{format(timeLeft.minutes)}</span>:
        <span className={styles.time}>{format(timeLeft.seconds)}</span>
      </div>
    </div>
  );
}
