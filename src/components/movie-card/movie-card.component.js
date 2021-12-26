import React from 'react';

// Constants
const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w300';

// Styled Components
import {Container, Poster, Info} from './movie-card.styles';

//
import {Text, Caption} from 'react-native-paper';

export const MovieCard = ({item, index, onItemPressHandler}) => {
  const {poster_path} = item;

  const handleItemPress = () => {
    onItemPressHandler(item);
  };

  return (
    <Container onPress={handleItemPress}>
      <Poster
        index={index}
        source={{
          uri: `${POSTER_BASE_URL}/${poster_path}`,
        }}
      />
      <Info>
        <Text ellipsizeMode="tail" numberOfLines={1}>
          {item.title}
        </Text>
        <Caption>Rating {item.vote_average}</Caption>
      </Info>
    </Container>
  );
};
