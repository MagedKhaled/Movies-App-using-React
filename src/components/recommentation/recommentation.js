import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { recomApi } from "../../api/recomApi";
import MoviesCard from "../MoviesCard";
import './recommentaion.css'
const Recom = () => {
    const [movies, setMovies] = useState()
    const {id} = useParams();
  
  
  
  
    useEffect(() => {
      console.log('id: ',id)
      recomApi(id, 'dbcf1a6fa43698e1105aa2a820dca1bf')
        .get("", {
          params: {
          },
        })
        .then((res) => {
          console.log('recommentaion: ',res.data)
          // console.log(res.data.production_companies[0].id)
  
          setMovies(res.data.results);

        })
        .catch((err) => console.log(err));
    }, []);

    return(
        <div>
           <h1 className="pt-5"> Recommentaions </h1>
           <hr/>
           <div className="recomContainer">
            {movies?.map((movie, index) => {
              return (
                <div className="" key={movie.id}>
                  <MoviesCard
                    movieData={movie}
                  />
                  
                </div>
              );
            })}
          </div>
        </div>
    )
}

export default Recom