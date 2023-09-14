import { createSlice } from "@reduxjs/toolkit";

export const prescriptionSlice =createSlice({
    name:"prescriptionDetails",
    initialState:{
        prescriptionDetails:null,

    },
        reducers:{
            prescriptionData:(state,action)=>{
                state.prescriptionDetails=action.payload;
            },
            clearPrescriptionData:(state)=>{
                state.prescriptionDetails ="";
            }
    }
})
const prescriptionReducer=prescriptionSlice.reducer
export const {prescriptionData,clearPrescriptionData}=prescriptionSlice.actions;
export const selectPrescriptionDetails=(state)=> state.prescriptionDetails.prescriptionDetails;

export default prescriptionReducer