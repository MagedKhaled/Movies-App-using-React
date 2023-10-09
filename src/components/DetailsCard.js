import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { axiosInstance } from "../api/cong";
import { addToWatchList } from "../store/slices/WatchListSlice";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Rating } from "react-simple-star-rating";
import StarRatings from "react-star-ratings";
import Recom from "./recommentation/recommentation";

export default function DetailCard() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const favoriteArray = useSelector((state) => state.watchlist.watchListItems);
  const [companyPoster, setCompanyPoster] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    axiosInstance
      .get(`https://api.themoviedb.org/3/movie/${params.id}}`, {
        params: {
          api_key: "dbcf1a6fa43698e1105aa2a820dca1bf",
        },
      })
      .then((res) => {
        // setMovie(res.data.results);
        setMovie(res.data);
        let companyWithLogo = res.data.production_companies?.find(
          (company) => company.logo_path !== null
        );
        if (companyWithLogo) {
          setCompanyPoster(companyWithLogo.logo_path);
        }
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        navigate("/not-found");
      });
  }, [params.id]);

  return (
    <><div className="container bg-light rounded" >
      <div className="p-4 row row-cols-sm-1 row-cols-lg-2">
        <div className=" col-4">
          <img
            className=" rounded  "
            src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
            width={"400px"}
            height={"450px"}
            alt="/"
          />
        </div>
        <div className=" col-8 text-start pt-2">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="fw-bold">{movie.title}</h3>
            <div
              onClick={(e) => {
                dispatch(addToWatchList(movie));
              }}
            >
              {favoriteArray.some(
                (favoriteMovie) => favoriteMovie.id === movie.id
              ) ? (
                <Favorite
                  sx={{ color: '#ffe69c' }}
                  style={{ cursor: "pointer" }}
                  fontSize="large"
                />
              ) : (
                <FavoriteBorder
                  sx={{ color: '#000' }}
                  fontSize="large"
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>
          </div>
          <h6 className="text-secondary">{movie.release_date}</h6>
          <div className="rating my-3 d-flex flex-inline align-items-center">
            <h6 className="me-3">
              {movie.vote_average && (
                <div>
                <StarRatings
                  rating={movie.vote_average / 2}
                  starRatedColor="#263238"
                  starDimension="20px"
                  numberOfStars={5}
                  name="rating"
                />{" "}
                
              </div>
              )}
            </h6>{" "}
            <h6>{movie.vote_count}</h6>
          </div>
          <p className="">{movie.overview}</p>
          <div className="catg d-flex flex-inline my-4">
            {movie?.genres?.map((catg) => {
              console.log(movie);
              return (
                <div className="bg-warning px-3 py-1 rounded me-2 fs-6">
                  {" "}
                  {catg.name}
                </div>
              );
            })}
          </div>
          <div className="d-flex flex-inline align-items-center">
            <p className="me-4 fs-6">
              <span className="fw-bold fs-6 me-3 ">Duration: </span>
              {movie.runtime} minutes{" "}
            </p>
            <p>
              <span className="fw-bold fs-6 me-3">Languages: </span>
              {movie?.spoken_languages
                ?.map((lang) => lang.english_name)
                .join(" | ")}
            </p>
          </div>
          <div>
            {companyPoster && (
              <img
                src={`http://image.tmdb.org/t/p/w500${companyPoster}`}
                height={"80px"}
                width={"120px"}
                className="rounded-pill"
                alt=""
              />
            )}
          </div>
        </div>
      </div>

      <hr className="mt-1 mb-5" />
      
    </div>
    <Recom />
    </>
  );
}