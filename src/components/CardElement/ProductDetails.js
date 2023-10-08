import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductDetails.css'
import Stars from "../StarRate/Stars";
import { gitDetailsApi } from '../../api/git_details'
import recommentaion from '../recommentation/recommentation'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState({ })
  const {id} = useParams();




  useEffect(() => {
    console.log('id: ',id)
    gitDetailsApi(id, 'dbcf1a6fa43698e1105aa2a820dca1bf')
      .get("", {
        params: {
        },
      })
      .then((res) => {
        console.log(res)
        setProductDetails(res.data);

      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="cardContainer">
      <div className="card d-flex flex-row cardContainer2">

        <div className="card-group imageContainer">
          <img src={`https://image.tmdb.org/t/p/w500/${productDetails.backdrop_path}`} className="card-img-start mt-1" alt="" />
          <div className="d-flex subIMagesContainer">
            {/* {productDetails.images.map((productImages, index) => {
              return (
                <img className="subIMages" src={productImages} key={index} width={'100px'} height={'100px'} alt="product image" />
              )
            })} */}



          </div>
        </div>

        <div className="card-body fw-bolder infoContainer">
          <div className="d-flex flex-row justify-content-between">
          <h5 className="card-title fw-bolder fs-2 m-0 mt-3 ">{productDetails.title}</h5>
          <div className="col-2 fs-4">{<FontAwesomeIcon icon={faHeart} />}</div>
          </div>

          <h6 className="text-secondary fs-6 pb-4">{productDetails.release_date}</h6>
          <Stars rate={productDetails['vote_average']} count={productDetails['vote_count']} />

          <p className="card-text fs-6 fw-bolder pt-5">{productDetails.overview}</p>
          {productDetails.genres?.map((gen, index) => {
            return (
              <span className="btn btn-warning my-4 py-0 px-3 m-1">{gen.name}</span>

            )
          })}
          <div className="d-flex flex-row">
            <h6 className="pe-5">Duration: <span className="text-secondary">{productDetails.runtime} </span>Min</h6>
            <h6 className="ps-5">Languages: <span>{productDetails.original_language}</span></h6>
          </div>

          {productDetails.production_companies?.map((comp, index) => {
          <span className="btn btn-success my-4 py-0 px-3 m-1">{comp.id}</span>

          })}


          <a href={productDetails.homepage}  target="blank" className="btn btn-light border border-success my-4 py-0 px-3 m-1">website</a>




        

        </div>
        <hr/>
      <recommentaion/>

      </div>

      
    </div>
  )



}
