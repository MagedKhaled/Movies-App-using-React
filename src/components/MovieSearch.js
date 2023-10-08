import { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
import { searchApi } from "../api/searchApi";
import { useParams } from "react-router";
import SearchBar from './searchBar'

export default function SearchMovies() {
  const [movies, setMovies] = useState()
  const { movieName } = useParams();

  




  useEffect(() => {
    searchApi(movieName, 'dbcf1a6fa43698e1105aa2a820dca1bf')
      .get("", {
        params: {
        },
      })
      .then((res) => {
        console.log(res)
        setMovies(res.data.results);

      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      <SearchBar/>
      
      <div className="row row-cols-md-5 g-4">
        {movies?.map((movie, index) => {
          return (
            <div className="col" key={movie.id}>
              <MoviesCard
                movieData={movie}
              />

            </div>
          );
        })}
      </div>
    </>
  );
}