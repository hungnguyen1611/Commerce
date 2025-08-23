/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Policy.module.css";
import classNames from "classnames/bind";

const Policys = [
  {
    name: "TOP DEAL",
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/ts/upload/2f/52/8e/00ab5fbea9d35fcc3cadbc28d7c6b14e.png",
  },
  {
    name: "Tiki Trading",
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/ts/upload/72/8d/23/a810d76829d245ddd87459150cb6bc77.png",
  },
  {
    name: "Coupon siêu hot",
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/ts/upload/8b/a4/9f/84d844f70e365515b6e4e3e745dac1d5.png",
  },
  {
    name: "Xả kho giảm nửa giá",
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/ts/upload/a5/d8/06/cb6ff520f12973013c81a8b14ad5e5b3.png",
  },
  {
    name: "Tiki sáng nay rẻ",
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/ts/upload/1c/1d/ab/a8853ac90be1473f095ee2437bab90ab.png",
  },
  {
    name: "Chống nắng toàn diện",
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/ts/upload/c6/9c/4b/b62e8fe17cd7e18e2f2dcda2e1854387.png",
  },
  {
    name: "Top Sách bán chạy",
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/ts/upload/4a/47/32/96cd0a5ab8f34621667f47a05e08d8b0.png",
  },
  {
    name: "Combo siêu tiết kiệm",
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/ts/upload/8a/39/6b/4e1827112e313e1c0540acb924f9e95b.png",
  },
  {
    name: "Mừng Ngày Của Cha 2025",
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/ts/upload/a2/cf/84/dab5e2a933efdbdb13962282999af39d.png",
  },
  {
    name: "Hạ nhiệt thần tốc",
    href: "/",
    urlImage:
      "https://salt.tikicdn.com/ts/upload/bd/b9/47/0851939e66a940edbbd5bea766cf06de.png",
  },
];
export default function Policy() {
  const cx = classNames.bind(styles);

  return (
    <div className={`${cx("wrapper")}`}>
      {Policys.map((item, index) => (
        <div key={index} className={`${cx("policy-item")}`}>
          <img
            className={`${cx("policy-img")}`}
            alt="img"
            src={item.urlImage}
          />
          <p className={`${cx("title-policy")}`}>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
