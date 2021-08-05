import axios, { AxiosResponse } from "axios";
import { Task } from "../contracts/Task";

const getTaskURL = "https://6108eb4fd71b670017639626.mockapi.io/api/v1/getTask";
const addTaskURL = "https://6108eb4fd71b670017639626.mockapi.io/api/v1/getTask";
const updateTaskURL = "https://6108eb4fd71b670017639626.mockapi.io/api/v1/getTask/:id";

export const getTask = async (): Promise<Task[]> => {
	try {
		const tasks: AxiosResponse<Task[]> = await axios.get(getTaskURL);
		return tasks.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const addTask = async (taskInfo: Task): Promise<Task> => {
	try {
		const newTask: AxiosResponse<Task> = await axios(addTaskURL, {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			data: JSON.stringify(taskInfo)
		});
		return newTask.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const updateTask = async (taskInfo: Task): Promise<Task> => {
	try {
		console.log(updateTaskURL.replace(":id", taskInfo.id));
		
		const newTask: AxiosResponse<Task> = await axios(
			updateTaskURL.replace(":id", taskInfo.id),
			{
				method: "PUT",
				headers: {
					"content-type": "application/json"
				},
				data: JSON.stringify(taskInfo)
			}
		);
		return newTask.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

