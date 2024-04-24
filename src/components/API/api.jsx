import axios from "axios";

const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzA2YjI4NjMxYzY0NWNiMGE3YjUyYzQ4YjY5MjYyMyIsInN1YiI6IjY2MTE4YzFhZDc2OGZlMDE2MjQxZDk4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lFFkVy_YomzTWKqeVHGBf4paZ5OizxWEjbWPkO3_MQQ";

export const trendingMovies = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const searchMovie = async (query) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCredits = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
