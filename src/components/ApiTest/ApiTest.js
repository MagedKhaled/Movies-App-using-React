import { axiosInstance } from '../../api/cong';
import { useEffect, useState } from "react";


const ApiTest = () => {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        axiosInstance
            .get("", {
                params: {
                    api_key: "dbcf1a6fa43698e1105aa2a820dca1bf"
                },
            })
            .then((res) => setMovieList([...res.data.results]))
            .catch((err) => console.log(err));
            console.log(movieList)



    }, []);




    return (
        <div >

                {movieList.map((movie, index) => {
                    return (
                        <div>
                            
                            <h2>Movie Title: {movie.title}</h2>
                            
                            {Object.keys(movie).map((key,index2) => {
                                return(
                                <h5>{key}: {movie[key]} </h5>
                                )
                            })}
                        </div>
                        // <h1>{Object.keys(movie)}</h1>
                    );
                })}
            </div>


    )
}

export default ApiTest