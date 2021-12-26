import React from 'react';

// Styled Components
import {Container, Backdrop} from './movie-details.styles';

// Constants
const BACKDROP_BASE_URL = `https://image.tmdb.org/t/p/w500`;

// Components
import {Spacer} from '../../components/elements';
import {Title, Caption, Paragraph} from 'react-native-paper';

export const MovieDetailsScreen = props => {
  const {navigation, route} = props;
  const {item} = route.params;
  const {title, overview, backdrop_path, release_date, vote_average} = item;
  return (
    <Container>
      <Backdrop source={{uri: `${BACKDROP_BASE_URL}/${backdrop_path}`}} />
      <Spacer />
      <Title>{title}</Title>
      <Caption>
        Released on {release_date} Rated {vote_average}
      </Caption>
      <Spacer />
      <Paragraph>{overview}</Paragraph>
    </Container>
  );
};
