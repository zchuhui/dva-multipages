import dva from 'dva';
import { browserHistory } from 'dva/router';
import createLoading from 'dva-loading';  //加载


// 1. 初始化数据
const app = dva({
	history: browserHistory
});

// 2. 使用插件：loading
app.use(createLoading());

// 3. 数据集
app.model(require("../models/users"));  

// 4. 路由
app.router(require('../loginRouter'));

// 5. Start
app.start('#root');
