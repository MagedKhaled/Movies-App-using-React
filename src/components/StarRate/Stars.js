import React from 'react';
import './Stars.css';
import CircularProgress from '@mui/joy/CircularProgress';

const Stars = (props) => {
    const intRate = Math.floor(props.rate);
    const decimalRate = props.rate - intRate;
    const starArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log('rate: ', intRate)

    return (
        <div className="d-flex align-items-center justify-content-start">
            <CircularProgress 
            determinate value={props.rate*10} 
            color={props.rate*10<50? "danger":"success"} 
            className="bg-light text-dark fw-bold m-2" 
            >{props.rate*10}%</CircularProgress>
            <h6 className='text-secondary'>{props.rate}/10 {props.count}</h6>
            <i className="fa fa-star ratingColor"></i>
        </div>
    );
}

export default Stars;
