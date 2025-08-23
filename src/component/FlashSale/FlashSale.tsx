import React from "react";
import classNames from "classnames/bind";
import stylesDesktop from "./FlashSale.module.css";
import stylesMobile from "./FlashSaleMobile.module.css";
import FlashSaleCountdown from "./FlashSaleCountdown/FlashSaleCountdown";
import Card from "@/component/Card/Card";
import { detectDevice } from "@/lib/detectDevice";
import Link from "next/link";

export default async function FlashSale({ data }: IProductTypes) {
  const isMobile = await detectDevice();
  const styles = isMobile ? stylesMobile : stylesDesktop;
  const cx = classNames.bind(styles);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("flash-sale")}>
        <FlashSaleCountdown />
        <Link href="/">Xem Tất cả</Link>{" "}
      </div>
      <div className={`${cx("list-card")}`}>
        {data.map((item, index) => (
          <Card key={index} production={item} />
        ))}
      </div>
    </div>
  );
}
