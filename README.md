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
├── public            //页面
│   ├── index.html
│   └── login.html
│
├── src 
│   ├── common        //静态文件
│   ├── components    //组件
│   ├── models      
│   ├── pages         //页面对应的js文件
│   │   ├── index.js
│   │   └── login.js
│   │ 
│   ├── routes         //组件路由
│   │   ├── Users.js
│   │   └── IndexPage.js
│   │ 
│   ├── services       //数据操作
│   ├── utils       
│   │   └──request.js  //定义统一的请求接口
│   │
│   ├── constants.js    // 常量集
│   ├── loginRouter.js  // 页面路由（登录页）
│   └── router.js       // 页面路由（默认页） 
│
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .roadhogrc         // 配置文件
├── .roadhogrc.mock.js
├── package.json         
└── README.md


```


## 三、多页面设置

在 `.roandhogrc` 文件里面设置
```
...
"autoprefixer": null,
"proxy": {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    },
    "/login": { 
      "target": "http://localhost:8000/",
      "pathRewrite": { "^/login" : "/login.html" }
    }
  }
```
默认的文件是`index`，在这里多开一个页面`login`   
每个页面对应一个路由，`index`页对应的路由是`router.js`，`login` 页对应的 `loginRouter.js`






