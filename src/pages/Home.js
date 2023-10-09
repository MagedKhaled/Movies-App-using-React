import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import { useNavigate } from "react-router";
import { axiosInstance } from "../api/cong";
import Paginations from "../components/Paginations";

export default function Home() {
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies();
  }, [currentPage]);

  const fetchMovies = () => {
    axiosInstance
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: "dbcf1a6fa43698e1105aa2a820dca1bf",
          page: currentPage,
        },
      })
      .then((res) => {
        const results = res.data.results;
        setMovieList(results);
      })
      .catch((err) => {
        navigate("/not-found");
      });
  };
  console.log(movieList);
  const totalPages = 500;
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <h2>Home</h2>
      <hr />

      <MoviesList movies={movieList} />
      <Paginations
        className="bg-white"
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
}
