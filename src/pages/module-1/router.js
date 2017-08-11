import React from 'react';
import { Router, Route } from 'dva/router';
import ModuleRouter from './routes/module-1-router.js';
import ModuleRouter1 from './routes/module-1-1-router.js';

// 页面路由1
function RouterConfig1({ history }) {
  return (
    <Router history={history}>
    	{/* 首页 */}
	    <Route path="/" component={ModuleRouter} ></Route> 
	    <Route path="/module-1-1" component={ModuleRouter1} ></Route> 
    </Router>
  ); 
};

export default RouterConfig1
