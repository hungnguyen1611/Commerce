/* eslint-disable @next/next/no-img-element */

import styles from "./FooterMobile.module.css";
import { IoHomeSharp } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
export default async function FooterMobile() {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.item} ${styles.active}`}>
        <IoHomeSharp style={{ fontSize: "20px" }} /> Trang Chủ
      </div>
      <div className={styles.item}>
        <BiSolidCategory style={{ fontSize: "20px" }} /> Danh Mục
      </div>

      <div className={styles.item}>
        <IoChatbubbleEllipses style={{ fontSize: "20px" }} /> Chat
      </div>

      <div className={styles.item}>
        <FaUser style={{ fontSize: "20px" }} /> Tài Khoản
      </div>
    </div>
  );
}
