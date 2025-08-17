import React from "react";
import classNames from "classnames/bind";
import styles from "./FlashSale.module.css";
import FlashSaleCountdown from "./FlashSaleCountdown/FlashSaleCountdown";
import Card from "../Card/Card";
export default function FlashSale({ data }: IProductTypes) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("wrapper")}>
      <FlashSaleCountdown />
      <div className={`${cx("list-card")}`}>
        {data.map((item, index) => (
          <Card key={index} production={item} />
        ))}
      </div>
    </div>
  );
}
