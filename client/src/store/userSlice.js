
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
    initialState: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    reducers: {
      loginStart: (state) => {
        state.isFetching = true;
      },
      loginSuccess: (state, action) => {
        state.isFetching = false;
        state.currentUser = action.payload;
      },
      loginFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
      setUser:(state,action)=>{
        return action.payload
      }
    }
  

  });
  
  


export const {setUser,loginStart, loginSuccess, loginFailure} = userSlice.actions
export default userSlice.reducer


  
