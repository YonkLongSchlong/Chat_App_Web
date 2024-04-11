import { configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import friendReducer from "../features/friend/friendSlice";
import messageReducer from "../features/message/messageSlice";
import { render } from "@testing-library/react";
import RenderReducer from "../redux/RenderReducer";

export const store = configureStore({
    reducer:{
        auth: authReducer,
        user: userReducer,
        friend: friendReducer,
        message: messageReducer,
        render: RenderReducer
    }
})