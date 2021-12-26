import React, {useCallback} from 'react';

// Styled Components
import {Container} from './movies-list.styles';

// Components
import {MovieCard} from '../movie-card/movie-card.component';

export const MoviesList = props => {
  const {data, columns, headerComponent, onItemPressHandler} = props;

  const renderItem = useCallback(
    ({item, index}) => (
      <MovieCard
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
      ListHeaderComponent={headerComponent}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={columns}
    />
  );
};
