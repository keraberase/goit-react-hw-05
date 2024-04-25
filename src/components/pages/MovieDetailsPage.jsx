import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";

import { useEffect, useState } from "react";
import { getMovieDetails } from "../components/API/api";
import css from "./MovieDetailsPage.module.css";

export const MoviesPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const movieDetails = async () => {
      const details = await getMovieDetails(movieId);
      setMovie(details);
    };
    movieDetails();
  }, [movieId]);

  return (
    <>
      <div className={css.back}>
        <Link to="/">Go back</Link>
      </div>
      {movie && (
        <div className={css.container}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            width="250"
          />
          <div>
            <h2>{movie.title}</h2>
            <p>User Score: {movie.vote_average}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>
      )}
      {movie && (
        <div>
          <h4>Additional information</h4>
          <ul>
            <li>
              <NavLink to={`/movies/${movieId}/cast`}>Movie Cast</NavLink>
            </li>
            <li>
              <NavLink to={`/movies/${movieId}/reviews`}>Movie Reviews</NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MoviesPage;
