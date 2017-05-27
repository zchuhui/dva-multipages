import React from 'react';
import { Router, Route } from 'dva/router';
import Login from "./routes/login/LoginPage.js";

// 登录页路由
function RouterConfig({ history }) {
  return (
    <Router history={history}>
    	{/* 登录页 */}
      	<Route path="/login" component={Login} />
    </Router>
  ); 
};

export default RouterConfig
