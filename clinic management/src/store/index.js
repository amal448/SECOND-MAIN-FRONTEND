import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./slice";

const store =configureStore({
    reducer:{
        root:rootReducer
    }
})
export default store