import styled from 'styled-components/native';

// Utils
import {getPosterHeight} from '../../utils/helpers';

// Theme
import {spacing} from '../../theme';

// Components
import {Dimensions} from 'react-native';

const GUTTER_SPACE = '10px';

const USABLE_WIDTH =
  Dimensions.get('window').width - parseInt(spacing.regular) * 2;

const POSTER_WIDTH = USABLE_WIDTH / 2 - parseInt(GUTTER_SPACE) + 5;

export const Container = styled.TouchableOpacity`
  ${({theme}) => `
    width:${POSTER_WIDTH}px;
`}

  ${({index}) =>
    index % 2 !== 0
      ? `margin-right: ${GUTTER_SPACE}`
      : `margin-left: ${GUTTER_SPACE}`}
  margin-top:5px;
`;

export const Poster = styled.Image`
  ${({theme}) => `
    width:${POSTER_WIDTH}px;
    height:${getPosterHeight(POSTER_WIDTH)}px;
    border-radius:${theme.size.borderRadius.smooth};
    background-color:${theme.color.background.secondary}
`}
`;

export const Info = styled.View`
  ${({theme}) => `
    padding:${theme.spacing.regular} 0px;
  `}
`;
