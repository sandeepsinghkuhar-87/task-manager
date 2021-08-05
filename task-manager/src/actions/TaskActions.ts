import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import GlobalState from "../contracts/GlobalState";
import { Task } from "../contracts/Task";

export enum TaskActionTypes {
	TASK_FETCH_SUCCESSFULL = "TASK_FETCH_SUCCESSFULL",
	TASK_ADD_SUCCESSFUL = "TASK_ADD_SUCCESSFUL",
	TASK_UPDATE_SUCCESSFUL = "TASK_UPDATE_SUCCESSFUL"
}

export interface fetchTaskActionType
	extends Action<TaskActionTypes.TASK_FETCH_SUCCESSFULL> {
	taskList: Task[];
}

export interface addNewTaskActionType
	extends Action<TaskActionTypes.TASK_ADD_SUCCESSFUL> {
	task: Task;
}

export interface updateTaskActionType
	extends Action<TaskActionTypes.TASK_UPDATE_SUCCESSFUL> {
	task: Task;
}

export type TaskActions = fetchTaskActionType | addNewTaskActionType | updateTaskActionType;

interface TaskDispatch {
	fetchTask: ActionCreator<
		ThunkAction<
			Promise<fetchTaskActionType>,
			GlobalState,
			null,
			fetchTaskActionType
		>
	>;
}

const getTasks = () => {
	return new Promise((resolve, reject) => {
		resolve([{ name: "oppo1" }, { name: "oppo2" }]);
	});
};

export const ProductActionCreators: TaskDispatch = {
	fetchTask: () => {
		return async (dispatch: Dispatch): Promise<fetchTaskActionType> => {
			try {
				const task = await getTasks();
				const taskFetchSuccessfulAction: fetchTaskActionType = {
					type: TaskActionTypes.TASK_FETCH_SUCCESSFULL,
					taskList: task as Task[]
				};
				return dispatch(taskFetchSuccessfulAction);
			} catch (error) {
				return Promise.reject(error);
			}
		};
	}
};

export const fetchTasksAction = (data: Task[]) => {
	return {
		type: TaskActionTypes.TASK_FETCH_SUCCESSFULL,
		taskList: data
	};
};

export const addNewTaskAction = (data: Task) => {
	return {
		type: TaskActionTypes.TASK_ADD_SUCCESSFUL,
		task: data
	};
};

export const updateTaskAction = (data: Task) => {
	return {
		type: TaskActionTypes.TASK_UPDATE_SUCCESSFUL,
		task: data
	};
};
