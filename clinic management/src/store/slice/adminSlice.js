import {createSlice } from "@reduxjs/toolkit"

const initialState ={
    loading:false,
    login:localStorage.getItem('admin-token')
}

const adminSlice =createSlice({

    name:"admin",
    initialState,
    reducers: {
        startLoading: (state)=>{
            state.loading =true
        },
        adminLogout:(state, {payload})=>{

            localStorage?.removeItem('admin-token')
            window.location='/admin/login'

    },
    }
})

const adminReducer =adminSlice.reducer

export const {startLoading,adminLogout}=adminSlice.actions;

export default adminReducer