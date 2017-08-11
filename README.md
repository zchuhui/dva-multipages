## 一、简介
这是由 `react + dva + antd` 构建的多页面应用

#### 使用

1. 安装依赖
```
$ npm install  
```

2. 启动项目

```
$ npm start
```

> 默认页面：localhost:8000   
> 登录页：localhost:8000/login



## 二、目录结构


```
├── mock 
├── public            // 页面
│   ├── index.html
│   ├── module-1.html
│   └── login.html
│
├── src 
│   ├── common        //静态文件
│   ├── components    //公用组件
│   ├── models      
│   ├── pages         // 多页面模块，每个页面组成一个模块
│   │   ├── home      // home 模块
│   │   │   ├── models     // 数据模块文件
│   │   │   ├── routes     // 页面数据路由文件
│   │   │   ├── views      // 页面文件
│   │   │   ├── routes.js  // 路由
│   │   │   └── home.js    // 启动文件
│   │   │   
│   │   ├── login          // 登录模块
│   │   │   ├── models     // 数据模块文件
│   │   │   ├── routes     // 页面数据路由文件
│   │   │   ├── views      // 页面文件
│   │   │   ├── routes.js  // 路由
│   │   │   └── home.js    // 启动文件
│   │   │ 
│   │   └── module-1       // 模块1
│   │       ├── models     // 数据模块文件
│   │       ├── routes     // 页面数据路由文件
│   │       ├── views      // 页面文件
│   │       ├── routes.js  // 路由
│   │       └── home.js    // 启动文件
│   │
│   │ 
│   │ 
│   ├── services       //数据操作
│   ├── utils       
│   │   └──request.js  //定义统一的请求接口
│   │
│   ├── constants.js    // 常量集
│
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .roadhogrc         // 配置文件
├── .roadhogrc.mock.js
├── package.json         
└── README.md


```


## 三、多页面配置

在 `.roandhogrc` 文件里面设置
```
"entry": [
    "src/pages/login/login.js",
    "src/pages/module-1/module-1.js",
    "src/pages/home/index.js"
    ],
"proxy": {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    },
    "/login": {
      "target": "http://localhost:3000/",
      "pathRewrite": { "^/login" : "/login.html" }
    },
    "/module-1": {
      "target": "http://localhost:3000/",
      "pathRewrite": { "^/module-1" : "/module-1.html" }
    }
  }
...
```
默认的文件是`index`，在这里多开一个页面`login`   
每个页面对应一个路由，`index`页对应的路由是`router.js`，`login` 页对应的 `loginRouter.js`






