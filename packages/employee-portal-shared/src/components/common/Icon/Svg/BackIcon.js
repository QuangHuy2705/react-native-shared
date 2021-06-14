import * as React from "react"

import Svg, { Path } from './SvgTags';

function BackIcon({ color = "#000", ...rest }) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...rest} xmlns="http://www.w3.org/2000/svg">
      <Path d="M14.9998 19.9998L6.99976 11.9998L14.9998 3.99975" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export default BackIcon;
