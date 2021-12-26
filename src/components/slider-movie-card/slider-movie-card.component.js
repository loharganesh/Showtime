import React from 'react';

// Styled Components
import {Container, Poster, Info} from './slider-movie-card.styles';

import {Text, Caption} from 'react-native-paper';

// Constants
const POSTER_BASE_URL = `https://image.tmdb.org/t/p/w500`;

export const SlideMovieCard = ({item, index, onItemPressHandler}) => {
  const {backdrop_path} = item;
  const handleItemPress = () => {
    onItemPressHandler(item);
  };
  return (
    <Container onPress={handleItemPress}>
      <Poster
        index={index}
        source={{
          uri: `${POSTER_BASE_URL}/${backdrop_path}`,
        }}
      />
      <Info>
        <Text>{item.title}</Text>
        <Caption>
          Rating {item.vote_average} Released {item.release_date}
        </Caption>
      </Info>
    </Container>
  );
};
