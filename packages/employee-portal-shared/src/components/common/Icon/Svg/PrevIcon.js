import * as React from "react"

import Svg, { Path } from './SvgTags';

function PrevIcon({ color = "#000", ...rest }) {
  return (
    <Svg width="6" height="11" viewBox="0 0 6 11" fill="none" {...rest} xmlns="http://www.w3.org/2000/svg">
      <Path d="M4.95112 1.50005L1 5.45117L4.95112 9.40229" stroke={color} strokeWidth="1.39693" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export default PrevIcon;
