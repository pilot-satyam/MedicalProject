import { myAxios } from "./helper";
export const signUp = (user)=>{
    //keeping in response.data so that the data which we are getting from the promise can be then pass to them of promise and will be used in signup
    return myAxios
    .post("/api/v1/auth/register",user)
    .then((response)=>response.data)
};