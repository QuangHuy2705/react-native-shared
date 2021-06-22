import * as React from "react"

import Svg, { Path } from './SvgTags';

function LocationIcon({ color = "#4F4F4F", ...rest }) {
  return (
    <Svg width="17" height="16" viewBox="0 0 17 16" fill="none" {...rest} xmlns="http://www.w3.org/2000/svg">
      <Path stroke={color} d="M10.1667 7.00037C10.1667 6.07953 9.42057 5.33337 8.50037 5.33337C7.57951 5.33337 6.83337 6.07953 6.83337 7.00037C6.83337 7.92057 7.57951 8.66671 8.50037 8.66671C9.42057 8.66671 10.1667 7.92057 10.1667 7.00037Z" strokeLinecap="round" strokeLinejoin="round" />
      <Path stroke={color} d="M8.49967 14C7.70067 14 3.5 10.5989 3.5 7.0422C3.5 4.25776 5.73807 2 8.49967 2C11.2613 2 13.5 4.25776 13.5 7.0422C13.5 10.5989 9.29867 14 8.49967 14Z" strokeLinejoin="round" />
    </Svg>
  );
}

export default LocationIcon;
