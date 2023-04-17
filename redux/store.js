import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './features/userSlice'
export default store = configureStore({
    reducer: {
        currentUser:  UserReducer,
    }
})