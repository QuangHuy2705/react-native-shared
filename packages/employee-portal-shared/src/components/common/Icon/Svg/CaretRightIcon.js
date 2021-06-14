import * as React from "react"

import Svg, { Path } from './SvgTags';

function CaretRight({ color = "#000", ...rest }) {
  return (
    <Svg width="8" height="8" viewBox="0 0 8 8" fill="none" {...rest} xmlns="http://www.w3.org/2000/svg">
      <Path d="M3 6.33317L5.66667 3.99984L3 1.6665V6.33317Z" fill={color} />
    </Svg>
  );
}

export default CaretRight;
