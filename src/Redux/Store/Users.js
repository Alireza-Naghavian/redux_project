import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserData = createAsyncThunk("users/getUsersFromSever",async (url)=>{
const {data} = await axios.get(url)
return {data}
})
const userSlice = createSlice({
name :"users",
initialState:[],
reducers:{

},    
extraReducers:builder =>{
    builder.addCase(getUserData.fulfilled,(state,action)=> action.payload.data)
}
})
export default userSlice.reducer