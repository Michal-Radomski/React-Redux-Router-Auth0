import {combineReducers} from "redux";

import Reducer1 from "./reducer1";
import UserReducer from "./user_reducer";
import Auth0Reducer from "./auth0_reducer";

const rootReducer = combineReducers({
  reducer1: Reducer1,
  user_reducer: UserReducer,
  auth0_reducer: Auth0Reducer,
});

export default rootReducer;
