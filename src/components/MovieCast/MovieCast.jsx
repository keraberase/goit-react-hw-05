import { useEffect, useState } from "react";
import css from "./MovieCast.module.css";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { getMovieCredits } from "../API/api";

export default function MovieCast() {
  const [error, setError] = useState(false);
  const [cast, setCast] = useState([]);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoader(true);
    if (!movieId) return;
    const fetchDetails = async () => {
      try {
        const { cast } = await getMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetchDetails();
  }, [movieId]);

  return (
    <div>
      {loader && <Loader />}

      <ul className={css.list}>
        {cast.map((character) => {
          return (
            <li key={character.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${character.profile_path}`}
                width="130"
              />
              <div>
                <p>{character.name}</p>
                <p>Character: {character.character}</p>
              </div>
            </li>
          );
        })}
      </ul>
      {error && <p>Some error happened</p>}
    </div>
  );
}
