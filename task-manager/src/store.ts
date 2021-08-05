import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";

import RootReducer from "./reducers/RootReducer";

const store = createStore(RootReducer, applyMiddleware(ReduxThunk));

export default store;
