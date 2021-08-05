import { combineReducers } from "redux";

import { TaskReducer } from "./TaskReducer";

const RootReducer = combineReducers({
	task: TaskReducer,
});

export default RootReducer;
