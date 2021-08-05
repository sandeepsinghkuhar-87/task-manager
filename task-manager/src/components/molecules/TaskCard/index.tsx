import { Button, Card } from "antd";
import { Task } from "../../../contracts/Task";
import "./index.less";

const { Meta } = Card;

export interface ProductCardProps {
	task: Task;
	onEdit: (taskInfo: Task) => void;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
	const { id, name, description, status } = props.task;
	const {onEdit} = props;
	return (
		<Card title={name} bordered={false}>
		  {description}
		  <Button
				onClick={() => {
					onEdit(props.task);
				}} key={id}>
				Edit
			</Button>
        </Card>
	);
};

export default ProductCard;
