import { TaskActions, TaskActionTypes } from "../actions/TaskActions";
import { Task } from "../contracts/Task";

export interface TaskState {
	taskList: Task[];
}
const intialState: TaskState = {
	taskList: []
};

export const TaskReducer = (
	state: TaskState = intialState,
	action: TaskActions
) => {
	switch (action.type) {
		case TaskActionTypes.TASK_FETCH_SUCCESSFULL:
			return {
				...state,
				taskList: [...action.taskList]
			};
		case TaskActionTypes.TASK_ADD_SUCCESSFUL:
			return {
				...state,
				taskList: [...state.taskList, action.task]
			};
			case TaskActionTypes.TASK_UPDATE_SUCCESSFUL:
			return {
				...state,
				taskList: [...state.taskList, action.task]
			};
		default:
			return state;
	}
};
