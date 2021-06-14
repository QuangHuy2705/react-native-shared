import * as React from "react"

import Svg, { Path } from './SvgTags';

function PublicIcon({ color = "#A7A7A7", ...rest }) {
  return (
    <Svg width="12" height="13" viewBox="0 0 12 13" fill="none" {...rest} xmlns="http://www.w3.org/2000/svg">
      <Path fill={color} d="M5.99987 6.38846C7.13399 6.38846 8.05346 5.27172 8.05346 3.8942C8.05346 2.51664 7.75153 1.3999 5.99987 1.3999C4.24815 1.3999 3.94629 2.51664 3.94629 3.8942C3.94632 5.27172 4.86576 6.38846 5.99987 6.38846Z" />
      <Path fill={color} d="M9.87438 10.0962C9.83639 7.69648 9.52296 7.01269 7.12467 6.57983C7.12467 6.57983 6.78701 7.01 6.00014 7.01C5.21327 7.01 4.87568 6.57983 4.87568 6.57983C2.50354 7.00793 2.17101 7.68161 2.1273 10.0182C2.12375 10.209 2.12211 10.219 2.12146 10.1969C2.12158 10.2384 2.12177 10.3151 2.12177 10.449C2.12177 10.449 2.69277 11.6001 6.00017 11.6001C9.30758 11.6001 9.87864 10.449 9.87864 10.449C9.87864 10.363 9.8787 10.3032 9.87877 10.2625C9.87812 10.2762 9.87679 10.2497 9.87438 10.0962Z" />
      <Path fill={color} d="M8.85008 5.94298C9.77122 5.94298 10.5179 5.03599 10.5179 3.91718C10.5179 2.79834 10.2728 1.89136 8.85008 1.89136C8.61077 1.89136 8.40485 1.91711 8.22771 1.96517C8.55631 2.57094 8.60135 3.30672 8.60135 3.89403C8.60135 4.55902 8.42108 5.19391 8.08911 5.71959C8.31729 5.86209 8.57585 5.94298 8.85008 5.94298Z" />
      <Path fill={color} d="M11.9964 8.95433C11.9655 7.00531 11.711 6.44996 9.76315 6.09839C9.76315 6.09839 9.48895 6.44779 8.84986 6.44779C8.82343 6.44779 8.79781 6.44699 8.77258 6.44585C9.17864 6.62892 9.54805 6.88384 9.82008 7.25686C10.2904 7.90173 10.3985 8.768 10.4208 10.0406C11.7313 9.78169 11.9999 9.24092 11.9999 9.24092C11.9999 9.17045 11.9999 9.12211 12 9.08906C11.9995 9.10068 11.9984 9.07985 11.9964 8.95433Z" />
      <Path fill={color} d="M3.14985 5.94295C3.42412 5.94295 3.68261 5.86205 3.91088 5.71959C3.57891 5.19391 3.39865 4.55902 3.39865 3.89403C3.39865 3.30668 3.44368 2.57091 3.77222 1.96517C3.59511 1.91711 3.38922 1.89136 3.14985 1.89136C1.72717 1.89136 1.48206 2.79834 1.48206 3.91718C1.48206 5.03596 2.22877 5.94295 3.14985 5.94295Z" />
      <Path fill={color} d="M3.22735 6.44585C3.20219 6.44699 3.17656 6.44779 3.15007 6.44779C2.51098 6.44779 2.23678 6.09839 2.23678 6.09839C0.288975 6.44996 0.0344026 7.00528 0.00355462 8.95433C0.00154549 9.07988 0.000525466 9.10068 0 9.08903C6.18195e-05 9.12207 0.000123639 9.17042 0.000123639 9.24089C0.000123639 9.24089 0.268729 9.78166 1.57912 10.0406C1.60153 8.768 1.70959 7.90173 2.17994 7.25682C2.45195 6.88387 2.82129 6.62892 3.22735 6.44585Z" />
    </Svg>
  );
}

export default PublicIcon;
