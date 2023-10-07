import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { register,login } from "./AuthAPICalls";
const initialState={
    loggedInUser:null,
    error:null,
    status:"idle",
}
export const Register=createAsyncThunk(
    "user/create",
    async(UserDetails)=>{
        
        try{
            console.log('im in');
            const response = await  register(UserDetails);
            return response.data;
        }
        catch(error)
        {
            throw error;
        }
    }
    
)
export const Login=createAsyncThunk(
    "user/login",
    async(UserDetails)=>{
        
        try{
            const response = await  login(UserDetails);
            return response.data;
        }
        catch(error)
        {
            throw error;
        }
    } 
)
export const Logout=createAsyncThunk(
   "user/logout",
   ()=>{
      try{
        console.log('in');
        return 1;
      }
      catch(error){
        throw error;
      }
   }
)

const authSlice=createSlice({
    name:"authSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(Register.pending,(state)=>{
            state.status="loading";
        })
        .addCase(Register.fulfilled,(state,action)=>{
            state.status="signupfulfilled";
        })
        .addCase(Register.rejected,(state,action)=>{
            state.status="signuperror";
            state.error=action.error;
        })
        .addCase(Login.pending,(state)=>{
            state.status="loading";
        })
        .addCase(Login.fulfilled,(state,action)=>{
            state.status="loginfulfilled";
            state.loggedInUser=action.payload;
        })
        .addCase(Login.rejected,(state,action)=>{
            state.status="loginerror";
            state.error=action.error;      
        })
        .addCase(Logout.pending,(state)=>{
            state.status="loading";
        })
        .addCase(Logout.fulfilled,(state,action)=>{
            console.log('in');
            state.status="fulfilled";
            state.loggedInUser=null;
        })
        .addCase(Logout.rejected,(state,action)=>{
            state.status="error";
            state.error=action.error;
        })
    }

})
export const selectLoggedinUser=(state)=>state.auth.loggedInUser;
export const selectStatus=(state)=>state.auth.status;

export default authSlice.reducer;