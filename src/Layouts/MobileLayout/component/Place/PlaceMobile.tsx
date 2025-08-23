import React from "react";
import styles from "./Place.module.css";
import classNames from "classnames/bind";
import { MdOutlinePlace } from "react-icons/md";
export default function PlaceMobile() {
  const cx = classNames.bind(styles);
  return (
    <div className={`${cx("wrapper")}`}>
      <MdOutlinePlace style={{ fontSize: "20px", color: "#ccc" }} />
      <p>
        Giao Đến:{" "}
        <span className={cx("address")}>Q.1, P. Bến Nghé, TP. Hồ Chí Minh</span>
      </p>
    </div>
  );
}
