
import MoviesCard from "./MoviesCard";
import SearchBar from "./searchBar";
import { useParams } from "react-router";
export default function MoviesList(props){
    // const [movies , setMovies] = useState(props);
    const { movies } = props;
    const params = useParams();

    // console.log(movies)

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