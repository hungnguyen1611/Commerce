/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import styles from "./Carousel.module.css";
import classNames from "classnames/bind";
import Slider, { CustomArrowProps } from "react-slick";

const cx = classNames.bind(styles);

/* Custom Arrow Component */
const NextArrow: React.FC<CustomArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={`${className} ${cx("slickNext")}`}
      style={style}
      onClick={onClick}
    >
      <span style={{ fontSize: 20, color: "#333" }}>›</span>
    </div>
  );
};

const PrevArrow: React.FC<CustomArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={`${className} ${cx("slickPrev")}`}
      style={style}
      onClick={onClick}
    >
      <span style={{ fontSize: 20, color: "#333" }}>‹</span>
    </div>
  );
};

/* Slider Settings */
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  appendDots: (dots: React.ReactNode) => (
    <ul className={cx("slickDots")}>{dots}</ul>
  ),
};

/* Brands Data */
const dataImagesSlide = [
  {
    id: 1,
    href: "/",
    image:
      "https://salt.tikicdn.com/cache/w750/ts/tikimsp/09/9f/2f/07af789758a3539d036dfbca6e2a5532.png.webp",
    width: 750,
    height: 422,
  },
  {
    id: 2,
    href: "/",
    image:
      "https://salt.tikicdn.com/cache/w750/ts/tikimsp/62/7d/5b/c6f4c335e214f9190a6081ee9c9f0f48.jpg.webp",
    width: 750,
    height: 422,
  },
  {
    id: 3,
    href: "/",
    image:
      "https://salt.tikicdn.com/cache/w750/ts/tikimsp/b6/7d/7c/4f26aa181b641d3e85c9a4625fbada8f.png.webp",
    width: 750,
    height: 422,
  },
  {
    id: 4,
    href: "/",
    image:
      "https://salt.tikicdn.com/cache/w750/ts/tikimsp/c0/91/1f/fdb80390cf276156bd1ea63d394b1b54.jpg.webp",
    width: 750,
    height: 422,
  },
  {
    id: 5,
    href: "/",
    image:
      "https://salt.tikicdn.com/cache/w750/ts/tikimsp/ce/bb/ca/bf817c3b012d06c49f36bcee952d4dfd.png.webp",
    width: 750,
    height: 422,
  },
  {
    id: 6,
    href: "/",
    image:
      "https://salt.tikicdn.com/cache/w750/ts/tikimsp/46/04/c0/7b19abbe04e57cf7dcc22960eec332e8.png.webp",
    width: 750,
    height: 422,
  },
];
export default function Carousel() {
  return (
    <div className={cx("wrapper")}>
      <Slider {...settings}>
        {dataImagesSlide.map((item) => (
          <div key={item.id}>
            <img className={cx("slideImage")} src={item.image} alt="img" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
