import React from 'react';
import { connect } from 'dva';
import Login from '../../components/Logins/Login';

// 登录页路由
function LoginPage(){
	return(
		<Login />
	);
}

export default connect()(LoginPage);