import { gitDetailsApi } from '../../api/git_details';
import { useEffect, useState } from "react";


const ApiTest = () => {

    const [movie, setMovie] = useState({ 'title': '' });

    useEffect(() => {
        gitDetailsApi(5, 'dbcf1a6fa43698e1105aa2a820dca1bf')
            .get("", {
                params: {
                },
            })
            .then((res) => {
                // console.log('res: ',res.data);
                setMovie({ ...res.data });
                console.log('mlist: ',movie);

            })
            .catch((err) => console.log(err));
    }, []);





    // JSX to display movie details
    return (
        <div>
            <div>
                <h2>Movie Title: {movie.title}</h2>
                
            </div>
        </div>
    );

}

export default ApiTest