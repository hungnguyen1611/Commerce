/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Header.module.css";
import classNames from "classnames/bind";
import Search from "./Search/Search";
import { IoIosHome } from "react-icons/io";
import { FaRegFaceSmileWink, FaCartShopping } from "react-icons/fa6";
import { MdOutlinePlace } from "react-icons/md";

export default function Header() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper")}>
      <div>
        <img className={cx("logo")} alt="logo" src="/assets/images/logo.png" />
        <p className={cx("logo-text")}>Tốt & Nhanh</p>
      </div>

      <div style={{ width: "100%" }}>
        <div className={cx("wrapper-search")}>
          <Search />
          <div className={cx("actions")}>
            <button className={cx("action-button")}>
              <IoIosHome style={{ fontSize: "20px" }} />
              Trang chủ
            </button>
            <button className={cx("action-button")}>
              {" "}
              <FaRegFaceSmileWink style={{ fontSize: "20px" }} />
              Tài khoản
            </button>
            <button className={cx("action-button")}>
              <FaCartShopping style={{ fontSize: "20px" }} />
            </button>
          </div>
        </div>

        <div className={cx("categories-wrapper")}>
          <div className={cx("categories")}>
            <a>Điện gia dụng</a>
            <a>Xe cộ</a>
            <a>Mẹ & Bé </a>
            <a>Khỏe đẹp</a>
            <a>Điện gia dụng</a>
            <a>Sách</a>
            <a>Thể thao</a>
          </div>
          <div>
            <div className={cx("location")}>
              <MdOutlinePlace
                style={{ fontSize: "20px", color: "rgb(128, 128, 137)" }}
              />
              <span>
                {" "}
                <span style={{ color: "rgb(128, 128, 137)" }}>
                  Giao đến:
                </span>{" "}
                Q.1, P. Bến Nghé, Hồ Chí Minh
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
