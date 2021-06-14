import * as React from "react"

import Svg, { Path, G, ClipPath, LinearGradient, Defs, Stop, Rect } from './SvgTags';

function PictureIcon({ color = "#130F26", ...rest }) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...rest} xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0)">
        <Path d="M20.0905 22.143L1.88456 20.1253C1.00922 20.0283 0.378306 19.24 0.475294 18.3647L2.14866 3.26629C2.24569 2.39095 3.03393 1.75998 3.90922 1.85702L22.1152 3.8748C22.9905 3.97184 23.6215 4.76008 23.5245 5.63537L21.8511 20.7338C21.7541 21.6091 20.9659 22.2401 20.0905 22.143Z" fill="url(#paint0_linear)" />
        <Path d="M23.5243 5.63541L22.8645 11.59L21.3981 3.79541L22.1153 3.87485C22.9904 3.97169 23.6212 4.75983 23.5243 5.63541Z" fill="url(#paint1_linear)" />
        <Path d="M22.6999 19.3384L4.69822 22.7249C3.83272 22.8878 2.99907 22.3181 2.83625 21.4526L0.0277774 6.52361C-0.135046 5.6581 0.434601 4.82446 1.30011 4.66163L19.3018 1.27509C20.1673 1.11227 21.001 1.68192 21.1638 2.54742L23.9722 17.4764C24.1351 18.342 23.5654 19.1756 22.6999 19.3384Z" fill="url(#paint2_linear)" />
        <Path d="M21.5481 4.59058V19.5552L22.6999 19.3385C23.5654 19.1757 24.1351 18.3421 23.9722 17.4766L21.5481 4.59058Z" fill="url(#paint3_linear)" />
        <Path d="M2.75098 20.9971L2.83667 21.4526C2.99949 22.3181 3.83314 22.8878 4.69865 22.7249L13.8834 20.9971H2.75098Z" fill="url(#paint4_linear)" />
        <Path d="M19.9531 21.0901H1.63565C0.754945 21.0901 0.0410156 20.3762 0.0410156 19.4955V4.3046C0.0410156 3.42389 0.754945 2.70996 1.63565 2.70996H19.9531C20.8338 2.70996 21.5477 3.42389 21.5477 4.3046V19.4955C21.5477 20.3762 20.8338 21.0901 19.9531 21.0901Z" fill="url(#paint5_linear)" />
        <Path d="M18.4597 19.5916H3.12882C2.39174 19.5916 1.79419 18.9941 1.79419 18.257V5.54289C1.79419 4.8058 2.39174 4.20825 3.12882 4.20825H18.4597C19.1968 4.20825 19.7944 4.8058 19.7944 5.54289V18.257C19.7944 18.9941 19.1968 19.5916 18.4597 19.5916Z" fill="url(#paint6_linear)" />
        <Path d="M11.8619 19.5915H3.12937C2.39215 19.5915 1.79431 18.9942 1.79431 18.257V16.1727L4.00993 13.4797C4.74113 12.5901 6.10217 12.5901 6.83389 13.4797L8.21342 15.1568L11.8619 19.5915Z" fill="url(#paint7_linear)" />
        <Path d="M19.7947 14.9056V18.257C19.7947 18.9943 19.1969 19.5916 18.4597 19.5916H4.5647L8.21326 15.1569L12.6954 9.70828C13.4266 8.81925 14.7882 8.81925 15.5194 9.70828L19.7947 14.9056Z" fill="url(#paint8_linear)" />
        <Path d="M6.45736 9.32414C7.50264 9.32414 8.35001 8.47677 8.35001 7.43148C8.35001 6.38619 7.50264 5.53882 6.45736 5.53882C5.41207 5.53882 4.5647 6.38619 4.5647 7.43148C4.5647 8.47677 5.41207 9.32414 6.45736 9.32414Z" fill="url(#paint9_linear)" />
      </G>
      <Defs>
        <LinearGradient id="paint0_linear" x1="6.13228" y1="4.66694" x2="19.6676" y2="21.5708" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFA936" />
          <Stop offset="0.4112" stopColor="#FF8548" />
          <Stop offset="0.7781" stopColor="#FF6C54" />
          <Stop offset="1" stopColor="#FF6359" />
        </LinearGradient>
        <LinearGradient id="paint1_linear" x1="23.0815" y1="7.48308" x2="21.9494" y2="7.73282" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F82814" stopOpacity="0" />
          <Stop offset="1" stopColor="#C0272D" />
        </LinearGradient>
        <LinearGradient id="paint2_linear" x1="4.24635" y1="6.70228" x2="22.1301" y2="18.9208" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#CDEC7A" />
          <Stop offset="0.2157" stopColor="#B0E995" />
          <Stop offset="0.5613" stopColor="#87E4BB" />
          <Stop offset="0.8347" stopColor="#6EE1D2" />
          <Stop offset="1" stopColor="#65E0DB" />
        </LinearGradient>
        <LinearGradient id="paint3_linear" x1="23.138" y1="12.0729" x2="21.2065" y2="12.0729" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#CDEC7A" stopOpacity="0" />
          <Stop offset="0.2354" stopColor="#9AD57D" stopOpacity="0.235" />
          <Stop offset="0.6035" stopColor="#51B482" stopOpacity="0.604" />
          <Stop offset="0.8679" stopColor="#239F85" stopOpacity="0.868" />
          <Stop offset="1" stopColor="#119786" />
        </LinearGradient>
        <LinearGradient id="paint4_linear" x1="8.31714" y1="21.9726" x2="8.31714" y2="20.8283" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#CDEC7A" stopOpacity="0" />
          <Stop offset="0.2354" stopColor="#9AD57D" stopOpacity="0.235" />
          <Stop offset="0.6035" stopColor="#51B482" stopOpacity="0.604" />
          <Stop offset="0.8679" stopColor="#239F85" stopOpacity="0.868" />
          <Stop offset="1" stopColor="#119786" />
        </LinearGradient>
        <LinearGradient id="paint5_linear" x1="4.15325" y1="5.2589" x2="19.4647" y2="20.5703" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F8F6FB" />
          <Stop offset="1" stopColor="#EFDCFB" />
        </LinearGradient>
        <LinearGradient id="paint6_linear" x1="5.30628" y1="4.76006" x2="20.2401" y2="24.1891" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#18CEFB" />
          <Stop offset="0.2969" stopColor="#2BB9F9" />
          <Stop offset="0.7345" stopColor="#42A0F7" />
          <Stop offset="1" stopColor="#4A97F6" />
        </LinearGradient>
        <LinearGradient id="paint7_linear" x1="3.55695" y1="14.8952" x2="10.0994" y2="23.4071" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#CDEC7A" />
          <Stop offset="0.2154" stopColor="#B0E995" stopOpacity="0.784" />
          <Stop offset="0.5604" stopColor="#87E4BB" stopOpacity="0.439" />
          <Stop offset="0.8334" stopColor="#6EE1D2" stopOpacity="0.165" />
          <Stop offset="0.9985" stopColor="#65E0DB" stopOpacity="0" />
        </LinearGradient>
        <LinearGradient id="paint8_linear" x1="9.35609" y1="13.575" x2="17.2468" y2="23.8408" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#CDEC7A" />
          <Stop offset="0.2157" stopColor="#B0E995" />
          <Stop offset="0.5613" stopColor="#87E4BB" />
          <Stop offset="0.8347" stopColor="#6EE1D2" />
          <Stop offset="1" stopColor="#65E0DB" />
        </LinearGradient>
        <LinearGradient id="paint9_linear" x1="5.51698" y1="6.20809" x2="8.07585" y2="9.53722" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFD945" />
          <Stop offset="0.3043" stopColor="#FFCD3E" />
          <Stop offset="0.8558" stopColor="#FFAD2B" />
          <Stop offset="1" stopColor="#FFA325" />
        </LinearGradient>
        <ClipPath id="clip0">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default PictureIcon;
