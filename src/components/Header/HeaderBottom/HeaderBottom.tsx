import React from "react";
import styles from "./HeaderBottom.module.css";
import classNames from "classnames/bind";
export default function HeaderBottom() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>Cam kết</p>
      <ul className={cx("list-commit")}>
        <li className={cx("list-item")}>100% Hàng thật</li>
        <li className={cx("list-item")}>Free ship mọi đơn</li>
        <li className={cx("list-item")}>Hoàn 200% nếu hàng giả</li>
        <li className={cx("list-item")}>30 ngày đổi trả</li>
        <li className={cx("list-item")}>Giao nhanh 2h</li>
        <li className={cx("list-item")}>Giá siêu rẻ</li>
      </ul>
    </div>
  );
}
