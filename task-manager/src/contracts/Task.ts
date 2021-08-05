export interface Task {
	id: string;
	name: string;
	description: string;
	status: TaskStatus;
}

export interface TaskStatus {
	id: string;
	name: string;
}