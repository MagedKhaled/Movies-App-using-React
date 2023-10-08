import { useEffect, useState } from "react";
import { axiosInstance } from "../api/cong";
import MoviesCard from "./MoviesCard";
import SearchBar from "./searchBar";
export default function MoviesList(){
    const [movies , setMovies] = useState([]);

    useEffect(()=>{
        axiosInstance
            .get("", {
                params: {
                    api_key: "dbcf1a6fa43698e1105aa2a820dca1bf"
                },
            })
            .then((res) => setMovies([...res.data.results]))
            .catch((err) => console.log(err));
           // console.log(movies)
    }, []);
    console.log(movies)

    return (
        <>
        <SearchBar/>
          <div className="row row-cols-md-5 g-4">
            {movies.map((movie, index) => {
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