import * as React from "react"

import Svg, { Path } from './SvgTags';

function ChatIcon({ color = "#130F26", ...rest }) {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...rest} xmlns="http://www.w3.org/2000/svg">
      <Path stroke={color} d="M14.3037 14.3024C12.0115 16.5947 8.61747 17.09 5.83994 15.8055C5.42991 15.6404 5.09373 15.507 4.77415 15.507C3.88399 15.5123 2.776 16.3754 2.20014 15.8002C1.62429 15.2243 2.48807 14.1155 2.48807 13.22C2.48807 12.9003 2.35994 12.5702 2.19486 12.1593C0.909745 9.3822 1.40571 5.98702 3.69782 3.69541C6.62382 0.768323 11.3776 0.768323 14.3037 3.69465C17.2349 6.62626 17.2296 11.3761 14.3037 14.3024Z" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export default ChatIcon;
