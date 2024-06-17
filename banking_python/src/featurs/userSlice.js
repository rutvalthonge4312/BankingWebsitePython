import { createSlice, nanoid } from "@reduxjs/toolkit"


export const userSlice=createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        updateUser(state,action){
            while (state.length > 0) {
                state.pop();
            }
            state.push(action.payload)
        },
        deleteUser(state,action){
            while (state.length > 0) {
                state.pop();
            }
        },
    }
})
export const {addUser,updateUser,deleteUser}=userSlice.actions;