import React from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.css";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
export default function Search() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("input-inner")}>
        <IoIosSearch style={{ fontSize: "20px" }} />
        <input className={cx("input")} placeholder="Free ship đơn từ 45k" />
      </div>
      <IoCartOutline style={{ fontSize: "20px" }} />
    </div>
  );
}
