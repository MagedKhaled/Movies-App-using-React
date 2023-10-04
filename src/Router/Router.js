import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Search from "../pages/Search";
import Watchlist from "../pages/Watchlist";
import EmptyWatchlist from "../pages/EmptyWatchlist";
import NotFound from "../pages/NotFound";

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/watchlist" element={<Watchlist/>}/>
            <Route path="/empty-watchlist" element={<EmptyWatchlist/>}/>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    );
}