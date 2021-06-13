import * as React from "react"

import Svg, { Path } from './SvgTags';

function ActivityIcon({ color = "#000", ...rest }) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M7.245 14.782l2.993-3.89 3.414 2.681 2.93-3.78M19.995 6.122a1.922 1.922 0 100-3.844 1.922 1.922 0 000 3.844z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.925 3.12H7.657c-3.011 0-4.879 2.133-4.879 5.144v8.083c0 3.011 1.831 5.135 4.879 5.135h8.604c3.012 0 4.879-2.124 4.879-5.135v-7.04"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ActivityIcon;
