import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit"
import {  persistStore,  persistReducer,  FLUSH,  REHYDRATE,  PAUSE,  PERSIST,  PURGE,  REGISTER,} from "redux-persist";
import { PersistGate } from 'redux-persist/es/integration/react'
import storage from "redux-persist/lib/storage";
import './index.css'
// import store from './store'
import rootReducer from "./store/slice";


const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, rootReducer); // Replace `authReducer` with your actual base reducer

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <App />
    </PersistGate>
  </Provider>
);






// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import { Provider } from 'react-redux'

// import './index.css'
// import store from './store'

// ReactDOM.createRoot(document.getElementById('root')).render(
  
 
//     <Provider store={store}>
//     <App />
//     </Provider>

// )
