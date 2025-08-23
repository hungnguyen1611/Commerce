import React from "react";
import styles from "./SideBarItem.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface SideBarItemProps {
  label: string;
  icon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}

const SideBarItem: React.FC<SideBarItemProps> = ({
  label,
  icon,
  trailingIcon,
  onClick,
  active,
}) => {
  return (
    <div className={cx("sidebarItem", { active })} onClick={onClick}>
      {icon && <span className={cx("icon", "leading")}>{icon}</span>}
      <span className={cx("label")}>{label}</span>
      {trailingIcon && (
        <span className={cx("icon", "trailing")}>{trailingIcon}</span>
      )}
    </div>
  );
};

export default SideBarItem;
