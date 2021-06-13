import * as React from "react"

import Svg, { Path } from './SvgTags';

function DropdownIcon({ color = "#000", ...rest }) {
  return (
    <Svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...rest} xmlns="http://www.w3.org/2000/svg">
      <Path stroke={color} d="M8.33325 3.75016L4.99992 7.0835L1.66658 3.75016" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
}

export default DropdownIcon;
