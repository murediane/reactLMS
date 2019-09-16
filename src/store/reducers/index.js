import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import messagesReducer from "./messages.reducer";

export default combineReducers({ authReducer, messagesReducer });
