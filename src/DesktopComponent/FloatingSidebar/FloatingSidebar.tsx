/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./FloatingSidebar.module.css";
import { IoSparklesOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";

const FloatingSidebar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        {/* <IoSparklesOutline className={styles.icon} /> */}
        <img
          className={styles.icon}
          src="/assets/images/chat-gpt-icon.png"
          alt="icon"
          width={32}
          height={32}
        />
        <span>Trợ lý</span>
      </div>
      <div className={styles.item}>
        <FiMessageSquare className={styles.icon} />
        <span>Tin mới</span>
        <span className={styles.badge}>1</span>
      </div>
    </div>
  );
};

export default FloatingSidebar;
