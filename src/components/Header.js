import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const watchList = useSelector((state) => state.watchlist.watchListItems);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#ffe69c" }}
      >
        <div className="container-fluid">
          <NavLink className="text-dark nav-link fw-bold fs-5" to="/">
            Movie App
          </NavLink>

         

          <div className="d-flex">
            <NavLink
              className="position-relative text-dark nav-link active me-5"
              aria-current="page"
              to="/watchlist"
            >
              <FontAwesomeIcon icon={faHeart} className="fs-5 me-2" />
              Watch list
              <span className="badge bg-light ms-2">{watchList.totalInWatchList}</span>
              {/* <span class="position-absolute top-0 start-100 translate-middle badge rounded bg-light text-dark">
                {0}
                <span class="visually-hidden">unread messages</span>
              </span> */}
            </NavLink>
            <Link
              className="nav-link active"
              aria-current="page"
              to="/*"
            ></Link>
          </div>
        </div>
      </nav>
    </>
  );
}
