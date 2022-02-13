import { useContext } from "react"
import FullList from "../components/FullList";
import UpcomingMovieContext from "../contexts/UpcomingMovieContext";
import Loading from "../components/Loading";

export default function UpcomingMovie() {
    const upcoming = useContext(UpcomingMovieContext);
    
    if(upcoming.loading){
        return <Loading/>
    }
    
    return(
        <FullList movieList={upcoming.data}/>
    )
}