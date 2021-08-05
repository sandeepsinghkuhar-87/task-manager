import { InputNumber, Modal } from "antd";
import { Form, Input, Button, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import { Option } from "antd/lib/mentions";
import * as React from "react";
import { Task } from "../../contracts/Task";

export interface AddTaskModalProps {
	visible: boolean;
	onCancel: () => void;
	onOk: (taskInfo: Task) => void;
	editTask?: Task
}

const AddTaskModal: React.FC<AddTaskModalProps> = (props) => {
	const { visible, onCancel, onOk, editTask } = props;
	const onFinish = (formValues: any) => {
		formValues.id = editTask?.id
		onOk(formValues);
	};
	const [form] = useForm<Task>();
	return (
		<Modal
			title='Add Task'
			visible={visible}
			onCancel={onCancel}
			footer={null}>
			<Form onFinish={onFinish} form={form}>
				<Form.Item name='name' label='Name' rules={[{ required: true }]} 
					initialValue={editTask?.name}>
					<Input />
				</Form.Item>
				<Form.Item name='description' label='Description' rules={[{ required: true }]}
				initialValue={editTask?.description}>
					<Input />
				</Form.Item>
				<Form.Item name='status' label='Task Status' rules={[{ required: true }]}
				initialValue={editTask?.status}>
					<Select>
						<Select.Option value="New">New</Select.Option>
						<Select.Option value="In Progress">In Progress</Select.Option>
						<Select.Option value="On Hold">On Hold</Select.Option>
						<Select.Option value="Completed">Completed</Select.Option>
						</Select>
				</Form.Item>
				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default AddTaskModal;
