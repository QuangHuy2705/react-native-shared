import * as React from "react"

import Svg, { Path } from './SvgTags';

function TaskIcon({ color = "#000", ...rest }) {
  return (
    <Svg width="21" height="20" viewBox="0 0 21 20" fill="none" {...rest} xmlns="http://www.w3.org/2000/svg">
      <Path stroke={color} d="M10.0768 2.32416H6.96104C4.39854 2.32416 2.79187 4.13832 2.79187 6.70666V13.635C2.79187 16.2033 4.39104 18.0175 6.96104 18.0175H14.3143C16.8852 18.0175 18.4843 16.2033 18.4843 13.635V10.2783" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <Path stroke={color} d="M7.8564 9.10075L14.0839 2.87327C14.8597 2.09827 16.1172 2.09827 16.893 2.87327L17.9072 3.88744C18.683 4.66327 18.683 5.92161 17.9072 6.69661L11.6497 12.9541C11.3105 13.2932 10.8505 13.4841 10.3705 13.4841H7.2489L7.32723 10.3341C7.3389 9.87075 7.52807 9.42908 7.8564 9.10075Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <Path stroke={color} d="M13.1375 3.83545L16.9425 7.64045" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export default TaskIcon;
