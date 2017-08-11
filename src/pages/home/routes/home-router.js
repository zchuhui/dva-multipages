import React from 'react';
import { connect } from 'dva';
import { Link } from "dva/router";
import { Layout } from 'antd';
import Headers from '../../../components/Header/Header';
import HomePage from '../views/home-page'; 

const { Header, Footer, Sider, Content } = Layout;


class HomeRouter extends React.Component{

    render (){
        return(
            <Layout>
                <Header>
                    <Headers />
                </Header>
                <Content>
                    <HomePage />
                </Content>
            </Layout>
        );
    }
}

export default connect()(HomeRouter);