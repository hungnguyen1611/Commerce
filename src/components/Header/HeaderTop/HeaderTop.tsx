/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import styles from "./HeaderTop.module.css";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa";
const cx = classNames.bind(styles);

export default function HeaderTop() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("tool-bar")}>
          {/* Download + QR */}
          <div className={cx("download-container")}>
            <button className={cx("header-btn")}>
              Download
              <FaChevronDown style={{ fontSize: "12px" }} />
            </button>
            <div className={cx("qr-code")}>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?data=https://example.com&size=150x150"
                alt="QR Code"
              />
            </div>
          </div>

          {/* Right Header */}
          <div className={cx("right-headerTop")}>
            <button className={cx("header-btn")}>
              <IoMdNotificationsOutline style={{ fontSize: "20px" }} />
              Notifications
            </button>
            <Tippy
              className={cx("custom-tippy")}
              interactive
              placement="bottom"
              content={
                <ul className={cx("menu-list")}>
                  <li className={cx("menu-item")}>Spanish</li>
                  <li className={cx("menu-item")}>French</li>
                  <li className={cx("menu-item")}>German</li>
                </ul>
              }
            >
              <button className={cx("header-btn")}>
                <GrLanguage />
                English
                <FaChevronDown style={{ fontSize: "12px" }} />
              </button>
            </Tippy>

            {/* Language menu */}
            <Tippy
              className={cx("custom-tippy")}
              interactive
              placement="bottom"
              content={
                <ul className={cx("menu-list")}>
                  <li className={cx("menu-item")}>€ EUR</li>
                  <li className={cx("menu-item")}>£ GBP</li>
                </ul>
              }
            >
              <button className={cx("header-btn")}>
                $ USD <FaChevronDown style={{ fontSize: "12px" }} />
              </button>
            </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
}
