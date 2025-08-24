"use client";
import classNames from "classnames/bind";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import styles from "./Search.module.css";
import { useEffect, useState } from "react";

export default function Search() {
  const cx = classNames.bind(styles);

  const [isFixed, setIsFixed] = useState(false);
  const threshold = 50;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        0;

      setIsFixed(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={cx(isFixed ? "wrapper-fixed" : "wrapper")}>
        <div className={cx("input-inner")}>
          <IoIosSearch style={{ fontSize: "20px" }} />
          <input className={cx("input")} placeholder="Free ship đơn từ 45k" />
        </div>
        <IoCartOutline style={{ fontSize: "20px" }} />
      </div>

      {/* Placeholder để tránh content jump khi chuyển sang fixed */}
      {isFixed && <div style={{ height: "60px" }} />}
    </>
  );
}
