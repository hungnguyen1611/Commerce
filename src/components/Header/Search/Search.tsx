"use client";

import classNames from "classnames/bind";
import { IoIosSearch } from "react-icons/io";
import styles from "./Search.module.css";
import Dropmenu from "@/components/DropMenu/DropMenu";
export default function Search() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper")}>
      <Dropmenu
        offset={[0, 16]}
        trigger="click"
        content={
          <ul className={cx("menu-list")}>
            <li className={cx("menu-item")}>Tất cả</li>
            <li className={cx("menu-item")}>Điện gia dụng</li>
            <li className={cx("menu-item")}>Xe cộ</li>
            <li className={cx("menu-item")}>Sách</li>
            <li className={cx("menu-item")}>Thể thao</li>
          </ul>
        }
      >
        <button className={cx("button-all")}>Tất cả</button>
      </Dropmenu>
      <div className={cx("input-wrapper")}>
        <IoIosSearch style={{ fontSize: "20px" }} />
        <input className={cx("input")} placeholder="Free ship đơn từ 45k" />
      </div>
      <button className={cx("button-search")}>Tìm kiếm</button>
    </div>
  );
}
