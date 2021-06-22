import * as React from "react"

import Svg, { Path, Circle } from './SvgTags';

function NotificationIcon({ color = "#130F26", dot, ...rest }) {
  return (
    <Svg width="24" height="26" viewBox="0 0 24 26" fill="none" {...rest} xmlns="http://www.w3.org/2000/svg">
      <Path stroke={color} d="M12 19.8476C17.6392 19.8476 20.2481 19.1242 20.5 16.2205C20.5 13.3188 18.6812 13.5054 18.6812 9.94511C18.6812 7.16414 16.0452 4 12 4C7.95477 4 5.31885 7.16414 5.31885 9.94511C5.31885 13.5054 3.5 13.3188 3.5 16.2205C3.75295 19.1352 6.36177 19.8476 12 19.8476Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <Path stroke={color} d="M14.3889 22.8572C13.0247 24.372 10.8967 24.3899 9.51953 22.8572" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {dot && <Circle cx="18.5" cy="5" r="4.5" fill="#EC2323" stroke="white" />}
    </Svg>
  );
}

export default NotificationIcon;
