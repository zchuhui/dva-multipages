import React from 'react';
import { connect } from 'dva';
import { Link } from "dva/router";
import { Layout } from 'antd';
import Headers from '../../../components/Header/Header';
import LoginPage from '../views/login-page';

const { Header, Footer, Sider, Content } = Layout;


class LoginRouter extends React.Component{

    render (){
        return(
            <Layout>
                <Header>
                    <Headers />
                </Header>
                <Content>
                    <LoginPage />
                </Content>
            </Layout>
        );
    }
}

export default connect()(LoginRouter);