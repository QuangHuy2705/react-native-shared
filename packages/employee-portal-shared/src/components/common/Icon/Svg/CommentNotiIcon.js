import * as React from "react"

import Svg, { Path, Circle } from './SvgTags';

function CommentNotiIcon({ color = "#FFF", ...rest }) {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...rest} xmlns="http://www.w3.org/2000/svg">
      <Circle cx="9" cy="9" r="8.4375" fill="black" stroke="white" strokeWidth="1.125" />
      <Path fill={color} d="M12.3146 12.3139C10.882 13.7466 8.76072 14.0561 7.02476 13.2533C6.76849 13.1501 6.55838 13.0668 6.35865 13.0668C5.8023 13.07 5.1098 13.6095 4.74989 13.25C4.38998 12.8901 4.92984 12.197 4.92984 11.6373C4.92984 11.4376 4.84976 11.2312 4.74659 10.9744C3.94339 9.23875 4.25337 7.11676 5.68594 5.68451C7.51469 3.85508 10.4858 3.85508 12.3146 5.68403C14.1466 7.51629 14.1433 10.4849 12.3146 12.3139Z" />
    </Svg>
  );
}

export default CommentNotiIcon;
