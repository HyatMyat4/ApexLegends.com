import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    WatchGameplay : false ,
    SideBar : false
}


export const Actionslice = createSlice({
    name: 'actionslice',
    initialState,
    reducers:{
        WatchGameplayEngin : (state , action) => {
            state.WatchGameplay = action.payload
        },
        SideBarEngin : (state , action) => {
            state.SideBar = action.payload
        }
    } 
})

export const  { 
    WatchGameplayEngin,
    SideBarEngin
} = Actionslice.actions

export const  WatchGameplayC = (state : any) => state.actionslice.WatchGameplay
export const  SideBarC = (state : any) => state.actionslice.SideBar

export default Actionslice.reducer;