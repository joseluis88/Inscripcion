import React from "react";

export function CarbonFilterEdit({ color, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      className={className}
    >
      <path
        color={color}
        fill="currentColor"
        d="M26 6H4v3.17l7.41 7.42l.59.58V26h4v-2h2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8l-7.41-7.41A2 2 0 0 1 2 9.17V6a2 2 0 0 1 2-2h22Z"
      ></path>
      <path
        color={color}
        fill="currentColor"
        d="m29.71 11.29l-3-3a1 1 0 0 0-1.42 0L16 17.59V22h4.41l9.3-9.29a1 1 0 0 0 0-1.42ZM19.59 20H18v-1.59l5-5L24.59 15ZM26 13.59L24.41 12L26 10.41L27.59 12Z"
      ></path>
    </svg>
  );
}
export default CarbonFilterEdit;
