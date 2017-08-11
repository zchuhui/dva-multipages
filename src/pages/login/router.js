import React from 'react';
import { Router, Route } from 'dva/router';
import LoginRouter from "./routes/login-router.js";

// 登录页路由
function RouterConfig({ history }) {
  return (
    <Router history={history}>
    	  {/* 登录页 */}
      	<Route path="/" component={LoginRouter} ></Route> 
    </Router>
  ); 
};

export default RouterConfig
