import classNames from "classnames/bind";
import CarouselMobile from "../Carousel/CarouselMobile";
import styles from "./HeaderMobile.module.css";
import PolicyMobile from "./PolicyMobile/PolicyMobile";
import Search from "./Search/Search";
import AppSkin from "../AppSkin/AppSkin";
export default function HeaderMobile() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("wrapper")}>
      <Search />
      <CarouselMobile />
      <PolicyMobile />
      <AppSkin />
    </div>
  );
}
