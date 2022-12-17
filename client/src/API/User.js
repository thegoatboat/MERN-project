import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from '../store/userSlice'
import { publicRequest } from "../requestMethod";

export const Regester = async (value) => {
 const registerAccount=await axios.post(`http://localhost:5000/api/auth/register`,{...value})
};




export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};