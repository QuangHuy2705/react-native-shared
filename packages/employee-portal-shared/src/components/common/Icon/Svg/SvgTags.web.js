import React from 'react';

export const Path = ({ children, ...props }) => <path {...props}>{children}</path>;
export const ClipPath = ({ children, ...props }) => <clipPath {...props}>{children}</clipPath>;
export const G = ({ children, ...props }) => <g {...props}>{children}</g>;
export const Circle = ({ children, ...props }) => <circle {...props}>{children}</circle>;
export const Rect = ({ children, ...props }) => <rect {...props}>{children}</rect>;
export const Defs = ({ children, ...props }) => <defs {...props}>{children}</defs>;
export const Stop = ({ children, ...props }) => <stop {...props}>{children}</stop>;
export const LinearGradient = ({ children, ...props }) => <linearGradient {...props}>{children}</linearGradient>;
export default Svg = ({ children, ...props }) => <svg {...props}>{children}</svg>;
