import ReactDOM from "react-dom";

import "./styles.less";
import "antd/dist/antd.css";

import { Provider } from "react-redux";
import store from "./store";
import AppDashboard from "./AppDashboard";

const RootComponent = () => {
	return (
		<div>
			<Provider store={store}>
				<AppDashboard />
			</Provider>
		</div>
	);
};

ReactDOM.render(<RootComponent />, document.getElementById("root"));
