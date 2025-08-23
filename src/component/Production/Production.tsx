/* eslint-disable @next/next/no-img-element */
import React from "react";

import stylesDesktop from "./Production.module.css";
import stylesMobile from "./ProductionMobile.module.css";
import classNames from "classnames/bind";
import Card from "@/component/Card/Card";
import Link from "next/link";
import { detectDevice } from "@/lib/detectDevice";
export default async function Production({ data }: IProductTypes) {
  const isMobile = await detectDevice();

  const styles = isMobile ? stylesMobile : stylesDesktop;

  const cx = classNames.bind(styles);

  return (
    <div className={`${cx("wrapper")}`}>
      <div className={`${cx("title")}`}>
        <img
          className={`${cx("title-img")}`}
          alt="deal"
          src={"/assets/images/deal.png"}
        />
        <Link href="/">Xem Tất cả</Link>
      </div>
      <div className={`${cx("list-card")}`}>
        {data.map((item, index) => (
          <Card key={index} production={item} />
        ))}
      </div>
    </div>
  );
}
