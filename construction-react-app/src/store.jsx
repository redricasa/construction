import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'
import {apiSlice} from './slices/apiSlice'
// import inventoryReducer from './slices/inventorySlice'


const store = configureStore({
    reducer: {
        auth: authReducer,
        // inventory: inventoryReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default store;