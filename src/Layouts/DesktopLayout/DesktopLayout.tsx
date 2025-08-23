import Header from "@/DesktopComponent/Header/header";
import HeaderBottom from "@/DesktopComponent/Header/HeaderBottom/HeaderBottom";
import HeaderTop from "@/DesktopComponent/Header/HeaderTop/HeaderTop";
import SideBar from "@/DesktopComponent/SideBar/SideBar";
import classNames from "classnames/bind";
import styles from "./DesktopLayout.module.css";

export default function DesktopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header-container")}>
        <HeaderTop />
        <Header />
      </div>
      <HeaderBottom />

      <div className={`${cx("content")} `}>
        <aside>
          <SideBar />
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
