// src/components/Badge/Badge.tsx
import React from "react";
import classNames from "classnames";
import styles from "./Badge.module.css";

interface BadgeProps {
  count?: number;
  showZero?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  count,
  showZero = false,
  children,
  className,
}) => {
  const isHidden = count === 0 && !showZero;

  return (
    <div className={classNames(styles.badgeWrapper, className)}>
      {children}
      {!isHidden && <span className={styles.badge}>{count}</span>}
    </div>
  );
};

export default Badge;
