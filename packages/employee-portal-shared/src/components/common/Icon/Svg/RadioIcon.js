import * as React from "react"

import Svg, { Circle } from './SvgTags';

function RadioIcon({ isActive, ...rest }) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...rest} xmlns="http://www.w3.org/2000/svg">
      <Circle cx="10" cy="10" r="9.25" stroke={isActive ? "#F15A22" : "#000000"} strokeWidth="1.5" />
      {isActive && <Circle cx="10" cy="10" r="6.25" fill="#F15A22" />}
    </Svg>
  );
}

export default RadioIcon;
