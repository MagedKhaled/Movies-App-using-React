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
                const nextWatchlist = state.watchListItems.filter(
                  (movie) => movie.id !== action.payload.id
                );
              state.watchListItems = nextWatchlist;
              if(state.totalInWatchList>0)
                  state.totalInWatchList--;
                
              }else{
                state.watchListItems.push(action.payload);
                state.totalInWatchList++;
              }
        },
        

    }
});

export const {
    addToWatchList,
    
} = watchList.actions;

export default watchList.reducer;
