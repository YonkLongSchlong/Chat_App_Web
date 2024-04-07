import { configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import friendReducer from "../features/friend/friendSlice";

export const store = configureStore({
    reducer:{
        auth: authReducer,
        user: userReducer,
        friend: friendReducer
    }
})