import ApiTest from '../components/ApiTest/ApiTest'
import MoviesList from '../components/MoviesList';
import RoundedRate from '../components/roundedrate/RoundedRate';



export default function Home (){
    return(
        <>
            <h2>Home</h2>
            <hr/>
            
            <MoviesList/>
            {/* <ApiTest/> */}
        </>
    );
}