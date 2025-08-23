/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./HeaderBottom.module.css";
import classNames from "classnames/bind";
export default function HeaderBottom() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>Cam kết</p>
      <ul className={cx("list-commit")}>
        <li className={cx("list-item")}>
          {" "}
          <img
            className={cx("icon-endow")}
            alt="icon"
            src={"/assets/images/icon-authentic.png"}
          />
          100% Hàng thật
        </li>
        <li className={cx("list-item")}>
          {" "}
          <img
            className={cx("icon-endow")}
            alt="icon"
            src={"/assets/images/icon-freeship.png"}
          />{" "}
          Free ship mọi đơn
        </li>
        <li className={cx("list-item")}>
          {" "}
          <img
            className={cx("icon-endow")}
            alt="icon"
            src={"/assets/images/icon-currency.png"}
          />{" "}
          Hoàn 200% nếu hàng giả
        </li>
        <li className={cx("list-item")}>
          {" "}
          <img
            className={cx("icon-endow")}
            alt="icon"
            src={"/assets/images/icon-box.png"}
          />{" "}
          30 ngày đổi trả
        </li>
        <li className={cx("list-item")}>
          {" "}
          <img
            className={cx("icon-endow")}
            alt="icon"
            src={"/assets/images/icon-express.png"}
          />{" "}
          Giao nhanh 2h
        </li>
        <li className={cx("list-item")}>
          {" "}
          <img
            className={cx("icon-endow")}
            alt="icon"
            src={"/assets/images/icon-cheap.png"}
          />{" "}
          Giá siêu rẻ
        </li>
      </ul>
    </div>
  );
}
