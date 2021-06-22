import * as React from "react"

import Svg, { Path, Circle } from './SvgTags';

function MeetingNotiIcon({ color = "#FFF", ...rest }) {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" {...rest} xmlns="http://www.w3.org/2000/svg">
      <Circle cx="20" cy="20" r="20" fill="black" />
      <Path stroke={color} d="M16.6378 11.6666V14.4089M12.577 17.8369H27.4303H12.577ZM23.7016 21.0914H23.7093H23.7016ZM20.0038 21.0914H20.0116H20.0038ZM16.2982 21.0914H16.3059H16.2982ZM23.7016 24.3301H23.7093H23.7016ZM20.0038 24.3301H20.0116H20.0038ZM16.2982 24.3301H16.3059H16.2982ZM23.3698 11.6666V14.4089V11.6666Z" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
      <Path stroke={color} d="M23.5319 12.9828H16.4758C14.0286 12.9828 12.5 14.3461 12.5 16.852V24.3934C12.5 26.9387 14.0286 28.3334 16.4758 28.3334H23.5242C25.9792 28.3334 27.5 26.9623 27.5 24.4564V16.852C27.5077 14.3461 25.9868 12.9828 23.5319 12.9828Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export default MeetingNotiIcon;
