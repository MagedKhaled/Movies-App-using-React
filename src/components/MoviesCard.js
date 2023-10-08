
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircularProgress from '@mui/joy/CircularProgress';
import * as React from 'react';

export default function MoviesCard(props) {
  const { movieData } = props;
  console.log(movieData);
  

  return (
    <div className="card border rounded ">
        <img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} className="card-img-top rounded position-relative"/>
        <div className="mx-4 my-3 position-relative">
        
            <CircularProgress 
            determinate value={movieData.vote_average*10} 
            color={movieData.vote_average*10<50? "danger":"success"} 
            className="position-absolute bottom-0 start-0 translate-middle bg-light text-dark fw-bold" 
            >{movieData.vote_average*10}%</CircularProgress>
            
            
        </div>
        
        <div className='row ms-1'>
            <div className='col-8'>
            <a className="text-decoration-none text-black" href={`/details/${movieData.id}`}>{movieData.title}</a>    
            <h6 className="text-muted">{movieData.release_date}</h6>
            </div>
            <div className="col-2 fs-4">{<FontAwesomeIcon icon={faHeart} />}</div>
        </div>
        
        
        
    </div>
  );
}
