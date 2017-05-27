import React from 'react';
import { connect } from 'dva';
import UsersComponent from '../components/Users/Users';
import Headers from '../components/Header/Header';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

// 用户表路由
function Users() {
  return (
    <div>
    	<Layout>
        	<Header>
        		<Headers />
        	</Header>
	        <Content>
	        	<UsersComponent />
	        </Content>
	        <Footer></Footer>
        </Layout>
    </div>
  );
}

export default connect()(Users);
