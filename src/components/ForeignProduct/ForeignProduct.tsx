/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "./ForeignProduct.module.css";
import classNames from "classnames/bind";
import Card from "../Card/Card";
export default function ForeignProduct({ data }: IProductTypes) {
  const cx = classNames.bind(styles);

  return (
    <div className={`${cx("wrapper")}`}>
      <h5 className={cx("foreign-title")}>Hàng Ngoại Giá Hot</h5>
      <div className={`${cx("list-card")}`}>
        {data.map((item, index) => (
          <Card key={index} production={item} />
        ))}
      </div>
    </div>
  );
}
