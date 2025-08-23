/* eslint-disable @next/next/no-img-element */
import classNames from "classnames/bind";
import stylesDesktop from "./Brand.module.css";
import stylesMobile from "./BrandMobile.module.css";
import { detectDevice } from "@/lib/detectDevice";

export default async function Brand({ data }: IBrandProps) {
  const isMobile = await detectDevice();

  const styles = isMobile ? stylesMobile : stylesDesktop;
  const cx = classNames.bind(styles);

  return (
    <div className={cx("wrapper")}>
      <h5 className={cx("brand-title")}>Thương hiệu nổi bật</h5>
      <div className={cx("list-brand")}>
        {data.map((item, index) => (
          <div key={index} className={cx("brand-item")}>
            <img className={cx("brand-img")} alt="brand" src={item?.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
