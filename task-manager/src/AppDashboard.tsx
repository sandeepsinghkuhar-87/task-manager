import { Menu } from "antd";
import "antd/dist/antd.css";
import Layout from "antd/lib/layout";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TaskPage from "./Pages/TaskPage";
const { Content, Sider } = Layout;

const Dashboard = () => {
	return (
		<Router>
			<Layout style={{ height: "100vh" }}>
				<Layout>
					<Sider width={200} className='site-layout-background'>
						<div className='logo'>
							<h1>Task Mngr</h1>
						</div>
						<Menu
							theme='dark'
							mode='inline'
							defaultSelectedKeys={["1"]}
							defaultOpenKeys={["sub1"]}>
							<Menu.Item key='home'>
								<Link to='/'>Home</Link>
							</Menu.Item>
							<Menu.Item key='task'>
								<Link to='/task'>Task</Link>
							</Menu.Item>
						</Menu>
					</Sider>
					<Layout className='site-layout'>
						<Content style={{ margin: "16px", height: "100%" }}>
							<div
								className='site-layout-background'
								style={{ height: "inherit" }}>
								<Switch>
									<Route exact path='/'>
										<div>Home</div>
									</Route>
									<Route exact path='/task'>
										<TaskPage />
									</Route>
								</Switch>
							</div>
						</Content>
					</Layout>
				</Layout>
			</Layout>
		</Router>
	);
};

export default Dashboard;
