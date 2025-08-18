import React, { forwardRef } from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const CompareIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ style, ...props }, ref) => {
    return (
      <svg
        ref={ref} // truyền ref để Tippy có thể attach (cách khác có thể bọc thêm 1 thẻ element khác bên ngoài )
        style={style}
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || 20}
        height={props.height || 20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chart-column-stacked"
        aria-hidden="true"
        {...props} //  cho phép override các props khác
      >
        <path d="M11 13H7" />
        <path d="M19 9h-4" />
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <rect x="15" y="5" width="4" height="12" rx="1" />
        <rect x="7" y="8" width="4" height="9" rx="1" />
      </svg>
    );
  }
);

CompareIcon.displayName = "CompareIcon"; //  fix warning khi dùng forwardRef

export default CompareIcon;
