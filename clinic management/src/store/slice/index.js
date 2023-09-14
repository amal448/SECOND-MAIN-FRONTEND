import { combineReducers } from "@reduxjs/toolkit";
import paymentReducer from "./PaymentSlice";
import userReducer from "./userSlice";
import doctorReducer from "./doctersSlice";
import prescriptionReducer from "./prescription";

const rootReducer = combineReducers({
    user:userReducer,
    doctor:doctorReducer,
    paymentDetails:paymentReducer,
    prescription:prescriptionReducer
})

export default rootReducer