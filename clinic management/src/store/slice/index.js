import { combineReducers } from "@reduxjs/toolkit";
import paymentReducer from "./PaymentSlice";
import userReducer from "./userSlice";
import doctorReducer from "./doctersSlice";

const rootReducer = combineReducers({
    user:userReducer,
    doctor:doctorReducer,
    paymentDetails:paymentReducer

})

export default rootReducer