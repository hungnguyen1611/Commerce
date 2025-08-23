/* eslint-disable @next/next/no-img-element */
import React from "react";

import stylesDesktop from "./ProductImageList.module.css";
import stylesMobile from "./ProductImageListMobile.module.css";
import classNames from "classnames/bind";
import { detectDevice } from "@/lib/detectDevice";

export default async function ProductImageList({ data }: IBrandProps) {
  const isMobile = await detectDevice();
  const styles = isMobile ? stylesMobile : stylesDesktop;
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
