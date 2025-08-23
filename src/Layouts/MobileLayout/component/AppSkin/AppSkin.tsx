import React from "react";
import styles from "./AppSkin.module.css";
import classNames from "classnames/bind";
export default function AppSkin() {
  const cx = classNames.bind(styles);
  return <div className={`${cx("wrapper")}`}></div>;
}
