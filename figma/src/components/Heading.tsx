import styled from 'styled-components';
// import { typography } from 'styled-system';

import Text from '../../../components/atoms/Text';

export const Title = styled(Text)`
  font-family: 'SF Pro Display';
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;

  color: #000000;
`;

export const Subtitle = styled(Title)`
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
`;
