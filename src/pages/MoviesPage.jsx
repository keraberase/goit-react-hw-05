import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import MovieList from "../components/MovieList/MovieList";
import { searchMovie } from "../components/API/api";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader/Loader";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const queryParam = searchParams.get("query");
        const data = await searchMovie(queryParam);
        setMovies(data.results);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    if (searchParams.has("query")) {
      fetchData();
    } else {
      setMovies([]);
    }
  }, [searchParams]);

  const handleSubmit = async (query) => {
    setSearchParams({ query });
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {loader && <Loader />}
      {error && <p>{error}</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
