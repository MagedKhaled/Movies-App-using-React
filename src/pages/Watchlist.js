import { useDispatch, useSelector } from "react-redux";
import EmptyWatchlist from "../components/EmptyWatchlist";
import { Rating } from "react-simple-star-rating";
import StarRatings from "react-star-ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { removeFromWatchList } from "../store/slices/WatchListSlice";

export default function Watchlist() {
  const watchlist = useSelector((state) => state.watchlist.watchListItems);
  const dispatch = useDispatch();
//   console.log(watchlist);
  const getDate = (d) => {
    let date = new Date(d);
    return date.toDateString();
  };
  return (
    <>
      {watchlist.length === 0 ? (
        <EmptyWatchlist />
      ) : (
        <div>
          <h2>Watchlist</h2>
          <hr />
          <div className="row row-cols-md-2 g-4">
            {watchlist.map((movie, index) => {
              return (
                <>
                  <div class="card mb-3 mx-4" style={{ maxWidth: "540px" , maxHeight:"280px" }}>
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          class="img-fluid rounded mt-2 mb-2"
                          alt="..."
                        />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <div className="row">
                          <h4 class="col-8 card-title fw-bold">{movie.title.substring(0, 15)}</h4>
                          <FontAwesomeIcon icon={faHeart} className="col-2 fs-3 me-2" onClick={()=>dispatch(removeFromWatchList(movie))}/>
                          </div>
                          <small className="text-muted">
                            {getDate(movie.release_date)}
                          </small>
                          <div>
                            <StarRatings
                              rating={movie.vote_average / 2}
                              starRatedColor="#263238"
                              starDimension="20px"
                              numberOfStars={5}
                              name="rating"
                            /> <small className="ms-3 fw-bold">{movie.vote_count}</small>
                          </div>
                          <hr />

                          <small class="card-text">{movie.overview.substring(0, 200)}</small>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
