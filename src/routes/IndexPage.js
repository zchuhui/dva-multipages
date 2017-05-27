import React from 'react';
import { connect } from 'dva';
import Headers from '../components/Header/Header';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

// 首页路由
function IndexPage() {
  return (
    <div>
        <Layout>
        	<Header>
        		<Headers />
        	</Header>
	        <Content>
	        	<h1 style={{ color:'#333','text-align':'center',margin:'50px'}}>Yay! Welcome to dva!</h1>
	        </Content>
	        <Footer></Footer>
	        
        </Layout>
    </div>
  );
}

export default connect()(IndexPage);
