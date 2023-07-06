import { createSlice } from "@reduxjs/toolkit";
// import state from "sweetalert/typings/modules/state";

const initialState={
    loading:false,
    login:localStorage.getItem('docter-token'),
    info: null
}

const doctorSlice =createSlice({
    name:'doctors',
    initialState,

    reducers :{
        startLoading:(state)=> {
            state.loading =true
        },
        setInfo:(state,{ payload }) =>{
            console.log(payload);
            state.info=payload
        },
        doctorLogout:(state,{payload})=>{
            if(payload)
            {
                localStorage.removeItem('docter-token')
                window.location='/doctor/login'
            }
        }
    }
})
const doctorReducer = doctorSlice.reducer

export const { startLoading,setInfo,doctorLogout } = doctorSlice.actions;
// export const selectUser =(state) =>state.
export default doctorReducer;