import styled from 'styled-components/native';

// Utils
import {getBackdropHeight} from '../../utils/helpers';

// Theme
import {spacing} from '../../theme';

// Components
import {Dimensions} from 'react-native';

const BACKDROP_WIDTH =
  Dimensions.get('window').width - parseInt(spacing.regular) * 2;

export const Container = styled.ScrollView`
  ${({theme}) => `
    padding:${theme.spacing.regular}
  `}
`;

export const Backdrop = styled.Image`
  ${({theme}) => `
    width:${BACKDROP_WIDTH}px;
    height:${getBackdropHeight(BACKDROP_WIDTH)}px;
    border-radius:${theme.size.borderRadius.smooth};
  `}
`;
