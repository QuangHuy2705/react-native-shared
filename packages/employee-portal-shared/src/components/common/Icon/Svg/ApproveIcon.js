import * as React from "react"

import Svg, { Path, Circle } from './SvgTags';

function ApproveIcon({ color = "#27AE60", innerColor = "#fff", ...rest }) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...rest} xmlns="http://www.w3.org/2000/svg">
      <Circle cx="10" cy="10" r="10" fill="#27AE60" />
      <Path d="M7 10.373L9.37398 12.746L14.12 8" stroke={innerColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
}

export default ApproveIcon;
