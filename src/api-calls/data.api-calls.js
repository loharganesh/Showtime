const TRENDING_MOVIES =
  'https://api.themoviedb.org/3/trending/all/day?api_key=952f36322e26f4ded157609dfa003716';

const POPULAR_MOVIES =
  'https://api.themoviedb.org/3/movie/popular?api_key=952f36322e26f4ded157609dfa003716&language=en-US&page=1';

export const getTrendingMovies = async () => {
  try {
    const response = await fetch(TRENDING_MOVIES);
    const json = await response.json();

    return json.results;
  } catch (error) {
    console.log(error);
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await fetch(POPULAR_MOVIES);
    const json = await response.json();

    return json.results;
  } catch (error) {
    console.log(error);
  }
};
