import Tippy from "@tippyjs/react";
import React from "react";
import styles from "./TooltipCard.module.css";
import classNames from "classnames/bind";

import type { Placement } from "@popperjs/core";

interface IDropmenuProps {
  children: React.ReactElement;
  placement?: Placement | undefined;
  content: React.ReactElement;
  offset?: [number, number];
  trigger?: string;
}
export default function TooltipCard({
  children,
  content,
  placement = "bottom",
  offset,
  trigger,
}: IDropmenuProps) {
  const cx = classNames.bind(styles);

  return (
    <Tippy
      className={`${cx("custom-tippy")} custom-tippy-card`}
      interactive
      placement={placement}
      content={content}
      offset={offset}
      trigger={trigger}
    >
      {children}
    </Tippy>
  );
}
