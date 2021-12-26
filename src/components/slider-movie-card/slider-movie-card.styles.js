import styled from 'styled-components/native';

// Utils
import {getBackdropHeight} from '../../utils/helpers';

// Components
import {Dimensions} from 'react-native';

const BACKDROP_WIDTH = Dimensions.get('window').width - 30;

export const Container = styled.TouchableOpacity`
  ${({theme}) => `border-radius:${theme.size.borderRadius.smooth};`}
`;

export const Poster = styled.Image`
  ${({theme}) => `
    width:${BACKDROP_WIDTH}px;
    height:${getBackdropHeight(BACKDROP_WIDTH)}px;
    border-radius:${theme.size.borderRadius.smooth};
    background-color:${theme.color.background.secondary}
`}
`;

export const Info = styled.View`
  ${({theme}) => `
    padding:${theme.spacing.regular} 0px;
  `}
`;
