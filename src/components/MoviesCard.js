import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgress from "@mui/joy/CircularProgress";
import * as React from "react";

import { addToWatchList } from "../store/slices/WatchListSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function MoviesCard(props) {
  const { movieData } = props;
  // console.log(movieData);
  const dispatch = useDispatch();
  const watchListMovies = useSelector(
    (state) => state.watchlist.watchListItems
  );
  const checkFavorits = watchListMovies.findIndex(
    (movie)=>movie.id === movieData.id
    )

    const navigat = useNavigate()

    const handleNavigate = (url) =>{
      navigat(url)
    }
  

  // console.log(watchListMovies.findIndex(movieData));

  const getDate = (d) => {
    let date = new Date(d);
    return date.toDateString();
  };

  return (
    <div className="card border rounded ">
      <img
        onClick={() => handleNavigate(`/details/${movieData.id}`)}
        src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
        className="card-img-top rounded position-relative"
      />
      <div className="mx-4 my-3 position-relative">
        <CircularProgress
          determinate
          value={movieData.vote_average * 10}
          color={movieData.vote_average * 10 < 50 ? "danger" : "success"}
          className="position-absolute bottom-0 start-0 translate-middle bg-light text-dark fw-bold"
        >
          {movieData.vote_average * 10}%
        </CircularProgress>
      </div>

      <div className="row ms-1">
        <div className="col-8">
          {/* <h6 className="">{movieData.title.substring(0, 15)}</h6> */}
          <a className="text-decoration-none text-black" href="#" onClick={() => handleNavigate(`/details/${movieData.id}`)}>{movieData.title.substring(0, 15)}</a>  <br/>  

          <small className="text-muted">
            {getDate(movieData.release_date)}
          </small>
        </div>
        
        {/* <div className='row ms-1'>
            <div className='col-8'>
            <a className="text-decoration-none text-black" href={`/details/${movieData.id}`}>{movieData.title}</a>    
            <h6 className="text-muted">{movieData.release_date}</h6>
            </div>
            <div className="col-2 fs-4">{<FontAwesomeIcon icon={faHeart} />}</div>
        </div> */}
        
        
        
      
          <div
            className="col-2 fs-2"
            // style={{ color: "#ffe69c" , backgroundColor: "#ffe69c"}}
            onClick={() => dispatch(addToWatchList(movieData))}
          >
            {<FontAwesomeIcon icon={faHeart} />}
          </div>
      </div>
    </div>
  );
}
