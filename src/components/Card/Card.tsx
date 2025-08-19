/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import CompareIcon from "@/assets/Icons/CompareIcon";
import { Formatter } from "@/utils/format";
import classNames from "classnames/bind";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import Dropmenu from "../DropMenu/DropMenu";
import styles from "./Card.module.css";
import CardExtend from "./CardExtend/CardExtend";
import TooltipCard from "../TooltipCard/ToolTipCard";
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
        <p className={`${cx("product-name")}`}>Product Name</p>
        <div className={`${cx("stars-wrapper")}`}>
          <div className={`${cx("stars")}`}>
            <FaStar style={{ fill: "#fce803", stroke: "black" }} />
            <FaStar style={{ fill: "#fce803", stroke: "black" }} />
            <FaStar style={{ fill: "#fce803", stroke: "black" }} />
            <FaStar style={{ fill: "#fce803", stroke: "black" }} />
            <FaStar style={{ fill: "#fce803", stroke: "black" }} />
          </div>
          5
        </div>
        <p>
          {/* <span className={`${cx("percent-sale")}`}>-40%</span>{" "} */}
          <span className={`${cx("before-currency")}`}>
            {Formatter.format(159000)}
          </span>
        </p>
        <p className={`${cx("currency")}`}>
          {Formatter.format(100000)}

          <TooltipCard
            placement="top"
            // offset={[0, 20]}
            content={<span>Add to cart</span>}
          >
            <span className={`${cx("cart-icon")}`}>
              <FaShoppingCart size={20} />
            </span>
          </TooltipCard>
        </p>

        <div className={`${cx("today-shipping")}`}>
          <FiBox size={20} /> <span>Today Shipping</span>
        </div>
        <p className={`${cx("in-stock")}`}>In Stock</p>
      </div>
      {/* <div className={`${cx("card-footer")}`}>
        <img
          className={`${cx("card-footer-img")}`}
          src={"/assets/images/now.png"}
        />
        <span>Giao hàng siêu tốc 2h</span>
      </div> */}

      <div className={cx("card-active", "card-active-heart")}>
        <TooltipCard
          offset={[0, 20]}
          placement="top"
          content={<span>Wishlist</span>}
        >
          <CiHeart size={20} />
        </TooltipCard>
      </div>

      <div className={`${cx("card-active", "card-active-compare")}`}>
        <TooltipCard
          offset={[0, 20]}
          placement="bottom"
          content={<span>Compare</span>}
        >
          <CompareIcon />
        </TooltipCard>
      </div>
      <div className={cx("card-extend")}>
        <CardExtend />
      </div>
    </div>
  );
}
