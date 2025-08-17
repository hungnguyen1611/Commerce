/* eslint-disable @next/next/no-img-element */
import classNames from "classnames/bind";
import styles from "./Header.module.css";
import Search from "./Search/Search";
import Link from "next/link";
import { FaUserLarge } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlinePlace } from "react-icons/md";
import Badge from "../Badge/Badge";
export default function Header() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header-logo")}>
        <img
          className={cx("logo")}
          alt="header"
          src="/assets/icon-shopee.svg"
        />
        <p>Tốt & Nhanh</p>
      </div>
      <div className={cx("header-right")}>
        <div className={cx("search-acount-wrapper")}>
          <Search />
          <div className={cx("acount")}>
            <FaUserLarge
              style={{ fontSize: "20px", color: "white", cursor: "pointer" }}
            />
            <div className={cx("acount-link")}>
              <Link href={"/"}>Sign in</Link>
              <Link href={"/"}>Account</Link>
            </div>
            <Badge count={1}>
              <CiHeart
                style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
              />
            </Badge>
            <Badge showZero count={0}>
              <FiShoppingBag
                style={{ fontSize: "24px", color: "white", cursor: "pointer" }}
              />
            </Badge>
          </div>
        </div>
        <div className={cx("categories-wrapper")}>
          <ul className={cx("categories")}>
            <Link href={"/"} className={cx("categories-item")}>
              Điện Gia Dụng
            </Link>
            <Link href={"/"}>Xe Cộ </Link>
            <Link href={"/"}>Mẹ & Bé</Link>
            <Link href={"/"}>Khỏe Đẹp</Link>
            <Link href={"/"}>Sách</Link>
            <Link href={"/"}>Thể Thao</Link>
          </ul>
          <div className={cx("place")}>
            <MdOutlinePlace style={{ fontSize: "20px", color: "white" }} />
            <p>
              Giao Đến:{" "}
              <span className={cx("address")}>
                Q.1, P. Bến Nghé, TP. Hồ Chí Minh
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
