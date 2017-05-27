import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Users from "./routes/Users.js";

// 页面路由
function RouterConfig({ history }) {
  return (
    <Router history={history}>
    	{/* 首页 */}
	    <Route path="/" component={IndexPage} />
		{/* 列表页 */}
	    <Route path="/users" component={Users} />
	    {/*<Route path="/2" component={require('./routes/menu-2.js')} /> */}
    </Router>
  ); 
};

export default RouterConfig
