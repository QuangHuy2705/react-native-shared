import * as React from "react"

import Svg, { Path } from './SvgTags';

function DocumentIcon({ width = 20, height = 20, color = "#000", ...rest }) {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...rest} xmlns="http://www.w3.org/2000/svg">
      <Path fill={color} d="M13.0968 13.5195H7.08008H13.0968ZM13.0968 10.0307H7.08008H13.0968ZM9.37592 6.55005H7.08008H9.37592Z" />
      <Path stroke={color} d="M9.37592 6.55005H7.08008M13.0968 13.5195H7.08008H13.0968ZM13.0968 10.0307H7.08008H13.0968Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <Path stroke={color} d="M13.257 2.29147C13.257 2.29147 6.85953 2.29481 6.84953 2.29481C4.54953 2.30897 3.12537 3.82231 3.12537 6.13064V13.794C3.12537 16.114 4.56037 17.6331 6.88037 17.6331C6.88037 17.6331 13.277 17.6306 13.2879 17.6306C15.5879 17.6165 17.0129 16.1023 17.0129 13.794V6.13064C17.0129 3.81064 15.577 2.29147 13.257 2.29147Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export default DocumentIcon;
