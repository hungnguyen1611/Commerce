/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Card.module.css";
import classNames from "classnames/bind";
import { FaStar } from "react-icons/fa";
import { Formatter } from "@/utils/format";

interface Iprops {
  production: {
    href: string;
    urlImage: string;
  };
}

export default function Card({ production }: Iprops) {
  const cx = classNames.bind(styles);

  return (
    <div className={`${cx("wrapper")}`}>
      <div className={`${cx("card-content")}`}>
        <img
          className={`${cx("card-img")}`}
          alt="img"
          src={production?.urlImage}
        />
        <p>Sachs chag</p>
        <div className={`${cx("stars")}`}>
          <FaStar style={{ fill: "#fce803", stroke: "black" }} />
          <FaStar style={{ fill: "#fce803", stroke: "black" }} />
          <FaStar style={{ fill: "#fce803", stroke: "black" }} />
          <FaStar style={{ fill: "#fce803", stroke: "black" }} />
          <FaStar style={{ fill: "#fce803", stroke: "black" }} />
        </div>
        <p className={`${cx("currency")}`}>{Formatter.format(100000)}</p>
        <p>
          <span className={`${cx("percent-sale")}`}>-40%</span>{" "}
          <span className={`${cx("before-currency")}`}>
            {Formatter.format(159000)}
          </span>
        </p>
      </div>
      <div className={`${cx("card-footer")}`}>
        <img
          className={`${cx("card-footer-img")}`}
          src={"/assets/images/now.png"}
        />
        <span>Giao hàng siêu tốc 2h</span>
      </div>
    </div>
  );
}
