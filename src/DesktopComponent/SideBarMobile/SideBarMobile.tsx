/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import styles from "./SideBarMobile.module.css";
import classNames from "classnames/bind";
import SideBarItem from "./SideBarItem/SideBarItem";
import { FaHome, FaUser, FaHeart } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Tippy from "@tippyjs/react";
const cx = classNames.bind(styles);

export default function SideBarMobile() {
  const [showQR, setShowQR] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleQR = () => setShowQR(!showQR);
  return (
    <div>
      <FaBars
        style={{ fontSize: "20px", color: "white", cursor: "pointer" }}
        onClick={() => setIsOpen(true)}
      />

      <div
        className={cx("overlay", { show: isOpen })}
        onClick={() => setIsOpen(false)}
      ></div>

      <div className={cx("sidebar", { open: isOpen })}>
        <h3>Menu</h3>
        <ul className={cx("menu-list")}>
          <SideBarItem
            label="Home"
            icon={<FaHome style={{ fontSize: "24px", fill: "#f63" }} />}
          />
          <SideBarItem
            label="Favourite"
            icon={<FaHeart style={{ fontSize: "24px", fill: "#f63" }} />}
          />
          <SideBarItem
            label="Notification"
            icon={
              <IoNotifications style={{ fontSize: "24px", fill: "#f63" }} />
            }
          />
          <Tippy
            trigger="click"
            className={cx("custom-tippy")}
            interactive
            placement="bottom"
            arrow={false}
            content={
              <ul className={cx("menu-list-tippy")}>
                <li className={cx("menu-item-tippy")}>Spanish</li>
                <li className={cx("menu-item-tippy")}>French</li>
                <li className={cx("menu-item-tippy")}>German</li>
              </ul>
            }
            popperOptions={{
              modifiers: [
                {
                  name: "matchWidth",
                  enabled: true,
                  phase: "beforeWrite",
                  requires: ["computeStyles"],
                  fn({ state }) {
                    // Lấy chiều rộng của phần tử tham chiếu
                    const referenceWidth = state.rects.reference.width;
                    // Áp dụng chiều rộng cho tooltip
                    state.styles.popper.width = `${referenceWidth}px`;
                  },
                },
              ],
            }}
          >
            <div>
              <SideBarItem
                label="English"
                icon={<MdLanguage style={{ fontSize: "24px", fill: "#f63" }} />}
                trailingIcon={
                  <FaChevronDown style={{ fontSize: "16px", fill: "#f63" }} />
                }
              />
            </div>
          </Tippy>
          <Tippy
            trigger="click"
            className={cx("custom-tippy")}
            interactive
            placement="bottom"
            arrow={false}
            content={
              <ul className={cx("menu-list-tippy")}>
                <li className={cx("menu-item-tippy")}>€ EUR</li>
                <li className={cx("menu-item-tippy")}>£ GBP</li>
              </ul>
            }
            popperOptions={{
              modifiers: [
                {
                  name: "matchWidth",
                  enabled: true,
                  phase: "beforeWrite",
                  requires: ["computeStyles"],
                  fn({ state }) {
                    // Lấy chiều rộng của phần tử tham chiếu
                    const referenceWidth = state.rects.reference.width;
                    // Áp dụng chiều rộng cho tooltip
                    state.styles.popper.width = `${referenceWidth}px`;
                  },
                },
              ],
            }}
          >
            <div>
              <SideBarItem
                label="USD"
                icon={
                  <FaDollarSign style={{ fontSize: "24px", fill: "#f63" }} />
                }
                trailingIcon={
                  <FaChevronDown style={{ fontSize: "16px", fill: "#f63" }} />
                }
              />
            </div>
          </Tippy>

          <div onClick={toggleQR} className={cx("download-container")}>
            <SideBarItem
              label="Sign In / Account"
              icon={<FaUser style={{ fontSize: "24px", fill: "#f63" }} />}
              onClick={() => alert("Clicked!")}
            />
            <SideBarItem
              label="Download"
              trailingIcon={
                <FaChevronDown style={{ fontSize: "16px", fill: "#f63" }} />
              }
            />
            <div className={cx("qr-code", { show: showQR })}>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?data=https://example.com&size=150x150"
                alt="QR Code"
              />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
