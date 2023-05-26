import React from "react";

export function CarbonMenu({ color, className }) {
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
        d="M4 6h24v2H4zm0 18h24v2H4zm0-12h24v2H4zm0 6h24v2H4z"
      ></path>
    </svg>
  );
}
export default CarbonMenu;
