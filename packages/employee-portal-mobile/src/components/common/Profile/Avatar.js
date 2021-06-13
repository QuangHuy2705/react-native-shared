import styled from 'styled-components';

import Image from '~/ui/primitives/Image';

const Avatar = styled(Image)`
  ${({ width = 40, height = 40 }) => `
    width: ${width}px;
    height: ${height}px;
    border-radius: ${Math.max(width, height) / 2}px;
  `}
`;

export default Avatar;
