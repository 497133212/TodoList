import React from 'react';
import './App.css';
import TodoFormContainer from "./containers/TodoFormContainer";
import {HashRouter as Router, Link, Route} from "react-router-dom";
import CompletedTodoLContainer from "./containers/CompletedTodo";
import TodoListContainer from "./containers/TodoListContainer";
import {Layout, Menu} from 'antd';
import {UserOutlined, VideoCameraOutlined,} from '@ant-design/icons';

const {Header, Footer, Sider, Content} = Layout;

function App() {

    return (
        <Router>
            <Layout>
                <Sider trigger={null} collapsible collapsed>
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined/>}>
                            <Link to="/">TodoList</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                            <Link to="/completedTodoList">CompletedTodoList</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}>
                        <h1>TodoList</h1>
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
    );
}

export default App;
