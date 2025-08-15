/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./HeaderTop.module.css";
import classNames from "classnames/bind";

export default function HeaderTop() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("text")}>Free ship đơn từ 45k, giảm hơn cùng </p>
      <img
        className={cx("image")}
        alt="free ship"
        src={"/assets/images/freeShip.png"}
      />
    </div>
  );
}
