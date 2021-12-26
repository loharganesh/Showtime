import React, {useCallback} from 'react';

// Styled Components
import {Container} from './movies-slider.styles';

// Components
import {SlideMovieCard} from '../slider-movie-card/slider-movie-card.component';
import {ListItemSeparator} from '../list-item-separator/list-item-separator.component';

import {Dimensions} from 'react-native';
const BACKDROP_WIDTH = Dimensions.get('window').width - 20;

export const MoviesSlider = props => {
  const {data, onItemPressHandler} = props;

  const renderItem = useCallback(
    ({item, index}) => (
      <SlideMovieCard
        item={item}
        index={index}
        onItemPressHandler={onItemPressHandler}
      />
    ),
    [],
  );
  const keyExtractor = useCallback(item => item.id, []);

  return (
    <Container
      horizontal
      ItemSeparatorComponent={() => (
        <ListItemSeparator width={10} height={10} />
      )}
      snapToInterval={BACKDROP_WIDTH}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};
