/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "./ProductImageList.module.css";
import classNames from "classnames/bind";

export default function ProductImageList({ data }: IBrandProps) {
  const cx = classNames.bind(styles);

  return (
    <div className={`${cx("wrapper")}`}>
      <div className={`${cx("list-image")}`}>
        {data.map((item, index) => (
          <img
            className={`${cx("image-item")}`}
            key={index}
            src={item.image}
            alt="ProductImageList"
          />
        ))}
      </div>
    </div>
  );
}
