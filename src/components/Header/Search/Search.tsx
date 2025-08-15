import React from "react";
import { IoIosSearch } from "react-icons/io";
import styles from "./Search.module.css";
import classNames from "classnames/bind";
export default function Search() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("input-wrapper")}>
        <IoIosSearch style={{ fontSize: "20px" }} />
        <input className={cx("input")} placeholder="Free ship đơn từ 45k" />
      </div>
      <button className={cx("button-search")}>Tìm kiếm</button>
    </div>
  );
}
