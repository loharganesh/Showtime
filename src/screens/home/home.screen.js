import React, {useCallback, useEffect} from 'react';

import {MOVIE_DETAIL_SCREEN} from '../../navigation/screen-name.constants';

// Actions & Selectors
import {
  fetchTrendingMoviesStart,
  fetchPopularMoviesStart,
} from '../../redux/data/data.actions';
import {useSelector, useDispatch} from 'react-redux';

// Components
import {Spacer} from '../../components/elements';
import {FlatList} from 'react-native';
import {Title, Headline} from 'react-native-paper';
import {MoviesSlider} from '../../components/movies-slider/movies-slider.component';
import {MoviesList} from '../../components/movies-list/movies-list.component';

export const HomeScreen = props => {
  const {navigation} = props;

  const {trendingMovies, popularMovies} = useSelector(
    state => state.dataReducer,
  );
  const {user} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const handleListItemPress = item => {
    navigation.navigate(MOVIE_DETAIL_SCREEN, {item});
  };

  useEffect(() => {
    dispatch(fetchTrendingMoviesStart());
    dispatch(fetchPopularMoviesStart());
  }, []);

  return (
    <FlatList
      style={{backgroundColor: '#FFFFFF'}}
      ListHeaderComponent={
        <>
          <Spacer position="left">
            <Spacer position="top" />
            <Title>
              {user !== null
                ? `Hello ${user.name} \nThese are trending movies`
                : `Hello There \nThese are trending movies`}
            </Title>
          </Spacer>

          <MoviesSlider
            data={trendingMovies}
            onItemPressHandler={handleListItemPress}
            s
          />
        </>
      }
      ListFooterComponent={
        <MoviesList
          onItemPressHandler={handleListItemPress}
          data={popularMovies}
          columns={2}
          headerComponent={
            <Spacer position="bottom">
              <Title>Popular Movies</Title>
            </Spacer>
          }
        />
      }
      data={[]}
    />
  );
};
