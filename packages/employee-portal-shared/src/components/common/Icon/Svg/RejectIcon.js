import * as React from "react"

import Svg, { Path, Circle } from './SvgTags';

function RejectIcon({ color = "#EC2323", innerColor = "#fff", ...rest }) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...rest} xmlns="http://www.w3.org/2000/svg">
      <Circle fill={color} cx="10" cy="10" r="10" />
      <Path fill={color} d="M11.9979 8.00178L8.00214 11.9976L11.9979 8.00178ZM11.9992 12L8 8L11.9992 12Z" />
      <Path stroke={innerColor} d="M11.9992 12L8 8M11.9979 8.00178L8.00214 11.9976L11.9979 8.00178Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export default RejectIcon;
