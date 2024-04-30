import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserData = createAsyncThunk("users/getUsersFromSever",async (url)=>{
const {data} = await axios.get(url)
return {data}
})
export const removeUser = createAsyncThunk("users/remove",async (id)=>{
    return await axios.delete(`https://redux-cms.iran.liara.run/api/users/${id}`)
})
const userSlice = createSlice({
name :"users",
initialState:[],
reducers:{

},    
extraReducers:builder =>{
    builder.addCase(getUserData.fulfilled,(state,action)=> action.payload.data),
    builder.addCase(removeUser.fulfilled,(state,action)=> {
        const newUserData = state.filter(item=>item._id !== action.payload.data.id);
        return newUserData
    })
}
})
export default userSlice.reducer