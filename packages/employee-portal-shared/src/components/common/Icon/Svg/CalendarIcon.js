import * as React from "react"

import Svg, { Path } from './SvgTags';

function CalendarIcon({ color = "#828282", ...rest }) {
  return (
    <Svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M3.077 7.837H17.93 3.077zm11.125 3.254h.007-.007zm-3.698 0h.008-.008zm-3.706 0h.008-.008zm7.404 3.239h.007-.007zm-3.698 0h.008-.008zm-3.706 0h.008-.008zM13.87 1.667v2.742-2.742zm-6.732 0v2.742-2.742z"
        fill={color}
      />
      <Path
        d="M7.138 1.667v2.742M3.077 7.837H17.93 3.077zm11.125 3.254h.007-.007zm-3.698 0h.008-.008zm-3.706 0h.008-.008zm7.404 3.239h.007-.007zm-3.698 0h.008-.008zm-3.706 0h.008-.008zM13.87 1.667v2.742-2.742zM14.032 2.983H6.976C4.529 2.983 3 4.346 3 6.853v7.54c0 2.546 1.529 3.94 3.976 3.94h7.048c2.455 0 3.976-1.37 3.976-3.876V6.851c.008-2.506-1.513-3.87-3.968-3.87z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CalendarIcon;
