import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import { textStyle, headingStyle, paragraphStyle } from '../../../styles';

export const HeadingBase = styled(Text)`${headingStyle}`;
export const TextBase = styled(Text)`${textStyle}`;
export const ParagraphBase = styled(Text)`${paragraphStyle}`;

const Heading = ({ variant = 'h1', ...rest }) => (
	<HeadingBase
		variant={variant}
		accessibilityRole='heading'
		aria-level={variant.replace(/h/, '')}
		{...rest}
	/>
);

export const Heading1 = Heading;

export const Heading2 = styled(Heading).attrs({ variant: 'h2' })``;

export const Heading3 = styled(Heading).attrs({ variant: 'h3' })``;

export const Heading4 = styled(Heading).attrs({ variant: 'h4' })``;

export const Heading5 = styled(Heading).attrs({ variant: 'h5' })``;

export const Heading6 = styled(Heading).attrs({ variant: 'h6' })``;

export const Paragraph = (props) => <ParagraphBase {...props} />;
Paragraph.defaultProps = { mb: 10 };

export const DefaultText = (props) => <TextBase {...props} />;

export default DefaultText;
