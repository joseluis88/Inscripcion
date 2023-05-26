import React from "react";

export function CarbonOverflowMenuVertical({ color, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      className={className}
    >
      className={color}
      <circle cx="16" cy="8" r="2" fill="currentColor"></circle>
      <circle cx="16" cy="16" r="2" fill="currentColor"></circle>
      <circle cx="16" cy="24" r="2" fill="currentColor"></circle>
    </svg>
  );
}
export default CarbonOverflowMenuVertical;
