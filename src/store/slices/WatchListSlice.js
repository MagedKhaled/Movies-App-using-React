import { createSlice } from "@reduxjs/toolkit";


const INTIAL_STATE ={
    watchListItems:[],
    totalInWatchList:0,
}

const watchList = createSlice({
    name:"watchList",
    initialState: INTIAL_STATE,
    reducers:{
        addToWatchList:(state , action)=>{
            const movieIndex = state.watchListItems.findIndex(
                (item) => item.id === action.payload.id
              );
              if(movieIndex >= 0){
                state.watchListItems[movieIndex].isFavorit = false;
                state.totalInWatchList--;
                
              }else{
                const movie = {...action.payload , isFavorit : true}
                state.watchListItems.push(movie);
                state.totalInWatchList++;
              }
        },
        removeFromWatchList:(state, action)=>{
            const nextWatchlist = state.watchListItems.filter(
                (movie) => movie.id !== action.payload.id
              );
            state.watchListItems = nextWatchlist;
            state.totalInWatchList--;
        },

    }
});

export const {
    addToWatchList,
    removeFromWatchList,
} = watchList.actions;

export default watchList.reducer;
