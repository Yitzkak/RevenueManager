import * as React from "react";

function SvgInput(props) {
  return (
    <svg width={22} height={18} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M-1-3h24v24H-1z" />
        <path opacity={0.87} d="M-1-3h24v24H-1z" />
        <path
          d="M20 .01H2c-1.1 0-2 .9-2 2V5c0 .55.45 1 1 1s1-.45 1-1V2.99c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.03c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V13c0-.55-.45-1-1-1s-1 .45-1 1v3.01c0 1.09.89 1.98 1.98 1.98H20c1.1 0 2-.9 2-2V2.01c0-1.1-.9-2-2-2zm-9.15 12.14l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79a.495.495 0 00-.85.35V8H1c-.55 0-1 .45-1 1s.45 1 1 1h9v1.79c0 .45.54.67.85.36z"
          fill="#1D1D1D"
        />
      </g>
    </svg>
  );
}

export default SvgInput;
