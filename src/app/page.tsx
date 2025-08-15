import React from "react";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import Carousel from "@/components/Carousel/Carousel";
import Policy from "@/components/Policy/Policy";
import Production from "@/components/Production/Production";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper")}>
      <Carousel />
      <Policy />
      <Production />
      <Footer />
    </div>
  );
}
