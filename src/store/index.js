import { configureStore } from "@reduxjs/toolkit";
import WatchListSlice from "./slices/WatchListSlice";

export default configureStore({
        reducer:{
            watchlist:WatchListSlice
        }
});

