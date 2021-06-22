import * as React from "react"

import Svg, { Path, Circle } from './SvgTags';

function TaskNotiIcon({ color = "#FFF", ...rest }) {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" {...rest} xmlns="http://www.w3.org/2000/svg">
      <Circle cx="20" cy="20" r="20" fill="black" />
      <Path stroke={color} d="M19.5768 12.3242H16.461C13.8985 12.3242 12.2919 14.1383 12.2919 16.7067V23.635C12.2919 26.2033 13.891 28.0175 16.461 28.0175H23.8143C26.3852 28.0175 27.9843 26.2033 27.9843 23.635V20.2783" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <Path stroke={color} d="M17.3564 19.1007L23.5839 12.8732C24.3597 12.0982 25.6172 12.0982 26.393 12.8732L27.4072 13.8874C28.183 14.6632 28.183 15.9216 27.4072 16.6966L21.1497 22.9541C20.8105 23.2932 20.3505 23.4841 19.8705 23.4841H16.7489L16.8272 20.3341C16.8389 19.8707 17.0281 19.4291 17.3564 19.1007Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <Path stroke="#130F26" d="M22.6375 13.8354L26.4425 17.6404" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export default TaskNotiIcon;
