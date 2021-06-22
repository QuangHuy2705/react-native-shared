import * as React from "react"

import Svg, { Path, Circle } from './SvgTags';

function RequestNotiIcon({ color = "#FFF", ...rest }) {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" {...rest} xmlns="http://www.w3.org/2000/svg">
      <Circle cx="20" cy="20" r="20" fill="black" />
      <Path stroke={color} d="M19.3759 16.55H17.0801M23.0968 23.5195H17.0801H23.0968ZM23.0968 20.0307H17.0801H23.0968Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <Path stroke={color} d="M23.257 12.2915C23.257 12.2915 16.8595 12.2948 16.8495 12.2948C14.5495 12.309 13.1254 13.8223 13.1254 16.1307V23.794C13.1254 26.114 14.5604 27.6332 16.8804 27.6332C16.8804 27.6332 23.277 27.6307 23.2879 27.6307C25.5879 27.6165 27.0129 26.1023 27.0129 23.794V16.1307C27.0129 13.8107 25.577 12.2915 23.257 12.2915Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export default RequestNotiIcon;
