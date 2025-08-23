/* eslint-disable @next/next/no-img-element */
import React from "react";
import stylesDesktop from "./ForeignProduct.module.css";
import stylesMobile from "./ForeignProductMobile.module.css";
import classNames from "classnames/bind";
import Card from "@/component/Card/Card";
import { detectDevice } from "@/lib/detectDevice";
export default async function ForeignProduct({ data }: IProductTypes) {
  const isMobile = await detectDevice();
  const styles = isMobile ? stylesMobile : stylesDesktop;
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
