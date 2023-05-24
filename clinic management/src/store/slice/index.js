import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import doctorReducer from "./doctersSlice";

const rootReducer = combineReducers({
    user:userReducer,
    doctor:doctorReducer

})

export default rootReducer