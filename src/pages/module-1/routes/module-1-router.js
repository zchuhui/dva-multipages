import React from 'react';
import { connect } from 'dva';
import { Link } from "dva/router";
import { Layout } from 'antd';
import Headers from '../../../components/Header/Header';
import ModulePage from '../views/module-1-page';

const { Header, Footer, Sider, Content } = Layout;


class ModuleOneRouter extends React.Component{

    render (){
        return(
            <Layout>
                <Header>
                    <Headers />
                </Header>
                <Content>
                    <ModulePage />
                </Content>
            </Layout>
        );
    }
}

export default connect()(ModuleOneRouter);