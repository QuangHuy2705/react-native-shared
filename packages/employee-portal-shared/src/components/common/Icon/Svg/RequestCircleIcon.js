import * as React from "react"

import Svg, { Circle, Path } from './SvgTags';

function RequestCircleIcon({ isActive, color = "black", ...rest }) {
  return (
    <Svg width="49" height="48" viewBox="0 0 49 48" fill="none" {...rest} xmlns="http://www.w3.org/2000/svg">
      <Circle cx="24" cy="24" r="23" stroke="#E0E0E0" strokeWidth="2" />
      <Path fill={color} d="M27.7161 28.2234H20.4961H27.7161ZM27.7161 24.0369H20.4961H27.7161ZM23.2511 19.8601H20.4961H23.2511Z" />
      <Path stroke={color} d="M23.2511 19.8601H20.4961M27.7161 28.2234H20.4961H27.7161ZM27.7161 24.0369H20.4961H27.7161Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <Path stroke={color} d="M27.9085 14.7499C27.9085 14.7499 20.2315 14.7539 20.2195 14.7539C17.4595 14.7709 15.7505 16.5869 15.7505 19.3569V28.5529C15.7505 31.3369 17.4725 33.1599 20.2565 33.1599C20.2565 33.1599 27.9325 33.1569 27.9455 33.1569C30.7055 33.1399 32.4155 31.3229 32.4155 28.5529V19.3569C32.4155 16.5729 30.6925 14.7499 27.9085 14.7499Z" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      {isActive && (<Circle cx="40.2062" cy="8.68562" r="5.25" transform="rotate(60.2723 40.2062 8.68562)" fill="#F15A22" stroke="white" strokeWidth="1.5" />)}
    </Svg>
  );
}

export default RequestCircleIcon;
