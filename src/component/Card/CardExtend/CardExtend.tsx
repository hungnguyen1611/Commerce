import classNames from "classnames/bind";
import styles from "./CardExtend.module.css";

export default function CardExtend() {
  const cx = classNames.bind(styles);

  return (
    <div className={`${cx("wrapper")}`}>
      <ul className={`${cx("info-list")}`}>
        <li className={`${cx("info-item")}`}>
          STRONG BREW: Brew a stronger, more intense single cup
        </li>
        <li className={`${cx("info-item")}`}>
          TRAVEL MUG FRIENDLY: Accommodates travel mugs up to 8.0” tall.
        </li>
      </ul>
    </div>
  );
}
