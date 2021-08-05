import TaskCard from "../../components/molecules/TaskCard";

import { useDispatch, useSelector } from "react-redux";

import "./index.less";
import GlobalState from "../../contracts/GlobalState";
import {
	TaskActionTypes
} from "../../actions/TaskActions";
import React from "react";
import { addTask, getTask, updateTask } from "../../services/task";
import { Button, message, Col, Row } from "antd";

import AddTaskModal from "./AddTaskModal";
import { Task } from "../../contracts/Task";

const TaskPage: React.FC = () => {
	const dispatch = useDispatch();

	const [addTaskModalVisible, setAddTaskModalVisible] =
		React.useState<boolean>(false);

	const [editTask, setEditTask] =
		React.useState<Task>();

	const { task } = useSelector((state: GlobalState) => {
		return {
			task: state.task.taskList
		};
	});

	const getTaskFromAPI = async () => {
		try {
			const task = await getTask();
			dispatch({
				type: TaskActionTypes.TASK_FETCH_SUCCESSFULL,
				taskList: task
			});
		} catch (error) {
			message.error("API call failed");
		}
	};

	React.useEffect(() => {
		getTaskFromAPI();
	}, []);

	const openAddTaskModal = () => setAddTaskModalVisible(true);
	const closeAddTaskModal = () => setAddTaskModalVisible(false);

	const onTaskEditClick = (taskInfo: Task) => {
		setEditTask(taskInfo);
		setAddTaskModalVisible(true);
	}

	const handleAddTask = async (taskInfo: Task) => {
		try {
			
			if( parseInt(taskInfo.id) > 0)
			{
				const newelyAddedTask = await updateTask(taskInfo);
				dispatch({
					type: TaskActionTypes.TASK_UPDATE_SUCCESSFUL,
					task: newelyAddedTask
				});
			}
			else
			{
				const newelyAddedTask = await addTask(taskInfo);
				dispatch({
					type: TaskActionTypes.TASK_ADD_SUCCESSFUL,
					task: newelyAddedTask
				});
			}

			closeAddTaskModal();
			getTaskFromAPI();
		} catch (error) {
			message.error("Add task failed");
		}
	};

	return (
		<div>
			<Button
				onClick={() => {
					openAddTaskModal();
				}}>
				Add Task
			</Button>
		
		<div className='task-page'>
			
		

			 <div className="site-card-wrapper">
			 	<h1>New</h1>
					{task.map((task) => {
					return task.status == 'New' ? (
						<div key={"div_"+task.id}>
						
						<Row gutter={16}>
						<Col className="padding-10" span={24} key={task.id}>
							<TaskCard task={task} onEdit={onTaskEditClick}/>
						</Col>
						</Row>
						</div>
					) : '';
				})}
			 </div>

			  <div className="site-card-wrapper">
			 	<h1>On Hold</h1>
					{task.map((task) => {
					return task.status == 'On Hold' ? (
						<div key={"div_"+task.id}>
						
						<Row gutter={16}>
						<Col className="padding-10" span={24} key={task.id}>
							<TaskCard task={task} onEdit={onTaskEditClick}/>
						</Col>
						</Row>
						</div>
					) : '';
				})}
			 </div>

  <div className="site-card-wrapper">
			 	<h1>In Progress</h1>
					{task.map((task) => {
					return task.status == 'In Progress' ? (
						<div key={"div_"+task.id}>
						
						<Row gutter={16}>
						<Col className="padding-10" span={24} key={task.id}>
							<TaskCard task={task} onEdit={onTaskEditClick}/>
						</Col>
						</Row>
						</div>
					) : '';
				})}
			 </div>

			  <div className="site-card-wrapper">
			 	<h1>Completed</h1>
					{task.map((task) => {
					return task.status == 'Completed' ? (
						<div key={"div_"+task.id}>
						
						<Row gutter={16}>
						<Col className="padding-10" span={24} key={task.id}>
							<TaskCard task={task} onEdit={onTaskEditClick}/>
						</Col>
						</Row>
						</div>
					) : '';
				})}
			 </div>
			 
			
			<AddTaskModal
				visible={addTaskModalVisible}
				onCancel={closeAddTaskModal}
				onOk={handleAddTask}
				editTask={editTask}
			/>
		</div>
		</div>
	);
};

export default TaskPage;
