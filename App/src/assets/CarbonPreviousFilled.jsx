import React from "react";

export function CarbonPreviousFilled({ color, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      className={className}
    >
      <path
        className={color}
        fill="currentColor"
        d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm8 15H11.85l5.58 5.573L16 24l-8-8l8-8l1.43 1.393L11.85 15H24Z"
      ></path>
      <path
        className={color}
        fill="none"
        d="m16 8l1.43 1.393L11.85 15H24v2H11.85l5.58 5.573L16 24l-8-8l8-8z"
      ></path>
    </svg>
  );
}
export default CarbonPreviousFilled;
