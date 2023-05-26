import React from "react";

export function CarbonTaskAdd({ color='', className='' }) {
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
        d="M31 24h-4v-4h-2v4h-4v2h4v4h2v-4h4v-2z"
      ></path>
      <path
        className={color}
        fill="currentColor"
        d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h10v-2H7V7h3v3h12V7h3v9h2V7a2.006 2.006 0 0 0-2-2Zm-5 3h-8V4h8Z"
      ></path>
    </svg>
  );
}
export default CarbonTaskAdd;
