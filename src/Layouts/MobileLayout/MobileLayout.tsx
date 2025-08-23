import classNames from "classnames/bind";
import styles from "./MobileLayout.module.css";
import HeaderMobile from "./component/Header/HeaderMobile";
import PlaceMobile from "./component/Place/PlaceMobile";
import FooterMobile from "./FooterMobile/FooterMobile";

export default function MobileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header-container")}>
        <HeaderMobile />
        <PlaceMobile />
      </div>
      {children}
      <FooterMobile />
    </div>
  );
}
