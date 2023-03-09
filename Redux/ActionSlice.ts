import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    WatchGameplay : false
}


export const Actionslice = createSlice({
    name: 'actionslice',
    initialState,
    reducers:{
        WatchGameplayEngin : (state , action) => {
            state.WatchGameplay = action.payload
        }
    } 
})

export const  { 
    WatchGameplayEngin
} = Actionslice.actions

export const  WatchGameplayC = (state : any) => state.actionslice.WatchGameplay

export default Actionslice.reducer;