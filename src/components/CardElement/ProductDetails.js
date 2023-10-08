import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductDetails.css'
import Stars from "../StarRate/Stars";
import { gitDetailsApi } from '../../api/git_details'
import Recom from '../recommentation/recommentation'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addToWatchList } from "../../store/slices/WatchListSlice";
import { useDispatch, useSelector } from "react-redux";


export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState()
  const {id} = useParams();

  const dispatch = useDispatch();
  // const watchListMovies = useSelector(
  //   (state) => state.watchlist.watchListItems
  // );




  useEffect(() => {
    console.log('id: ',id)
    gitDetailsApi(id, 'dbcf1a6fa43698e1105aa2a820dca1bf')
      .get("", {
        params: {
        },
      })
      .then((res) => {
        console.log(res.data)
        // console.log(res.data.production_companies[0].id)

        setProductDetails(res.data);

      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="cardContainer d-flex flex-column">
      
      <div className="card d-flex flex-row cardContainer2">

        <div className="card-group imageContainer">
          <img src={`https://image.tmdb.org/t/p/w500/${productDetails?.backdrop_path}`} className="card-img-start mt-1" alt="" />
          
        </div>

        <div className="card-body fw-bolder infoContainer">
          <div className="d-flex flex-row justify-content-between">
          <h5 className="card-title fw-bolder fs-2 m-0 mt-3 ">{productDetails?.title}</h5>
          <div
            className="col-2 fs-2"
            // style={{ color: "#ffe69c" , backgroundColor: "#ffe69c"}}
            onClick={() => dispatch(addToWatchList(productDetails))}
          >
            {<FontAwesomeIcon icon={faHeart} />}
          </div>
          {/* <div className="col-2 fs-4">{<FontAwesomeIcon icon={faHeart} />}</div> */}
          </div>

          <h6 className="text-secondary fs-6 pb-4">{productDetails?.release_date}</h6>
          <Stars rate={productDetails?.vote_average} count={productDetails?.vote_count} />

          <p className="card-text fs-6 fw-bolder pt-2">{productDetails?.overview}</p>
          {productDetails?.genres?.map((gen, index) => {
            return (
              <span className="btn btn-warning my-4 py-0 px-3 m-1">{gen.name}</span>

            )
          })}
          <div className="d-flex flex-row">
            <h6 className="pe-5"><strong>Duration: </strong><span className="text-secondary">{productDetails?.runtime} </span>Min</h6>
            <h6 className="ps-5"><strong>Languages: </strong><span>{productDetails?.original_language}</span></h6>
          </div>

          <div className="logoContainer">
          {productDetails?.production_companies.map((comp, index) => {
            return(
          // <span className="btn btn-success my-4 py-0 px-3 m-1">{comp.name}</span>
          <img src={`https://image.tmdb.org/t/p/w500/${comp?.logo_path}`} className="card-img-start mt-1" alt="" />
            )
          })}
          </div>


          <a href={productDetails?.homepage}  target="blank" className="btn btn-light border border-success my-4 py-0 px-3 m-1">website</a>




        

        </div>
        <hr/>



      </div>

      {/* <div className="d-flex subIMagesContainer">
            {productDetails.images?.map((productImages, index) => {
              return (
                <img className="subIMages" src={productImages} key={index} width={'100px'} height={'100px'} alt="product image" />
              )
            })}



          </div> */}

      <Recom/>



      
    </div>
  )



}
