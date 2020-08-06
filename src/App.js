import React from 'react';
import './App.css';
import TodoFormContainer from "./containers/TodoFormContainer";
import {HashRouter as Router, Link, Route} from "react-router-dom";
import CompletedTodoLContainer from "./containers/CompletedTodo";
import TodoListContainer from "./containers/TodoListContainer";
import {Layout, Menu} from 'antd';
import WeiboCircleOutlined from "@ant-design/icons/es/icons/WeiboCircleOutlined";
import QqOutlined from "@ant-design/icons/es/icons/QqOutlined";

const {Header, Footer, Sider, Content} = Layout;

function App() {

    return (
        <div className="body-layout">
            <Router>
                <Layout className="body-layout">
                    <Sider trigger={null} collapsible collapsed>
                        <div className="left-layout">
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                                <Menu.Item key="1" icon={<WeiboCircleOutlined/>}>
                                    <Link to="/">TodoList</Link>
                                </Menu.Item>
                                <Menu.Item key="2" icon={<QqOutlined/>}>
                                    <Link to="/completedTodoList">CompletedTodoList</Link>
                                </Menu.Item>
                            </Menu>
                        </div>
                    </Sider>
                    <Layout className="site-layout">
                        <Header theme="dark" style={{padding: 0}}>
                            <h1 className="Logo">TodoList</h1>
                        </Header>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                            }}
                        >
                            <Route path="/completedTodoList" component={CompletedTodoLContainer}/>
                            <Route exact path={"/"} render={() => {
                                return (
                                    <div>
                                        <TodoFormContainer/>
                                        <TodoListContainer/>
                                    </div>
                                )
                            }}/>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        </div>
    );
}

export default App;
